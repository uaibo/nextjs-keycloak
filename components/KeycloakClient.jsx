"use client"

import { useSelector } from "react-redux";
import { setToken, setRefreshToken, clearKeycloak } from "@/store/slices/keycloakSlice";
import { setUser, clearUser } from "@/store/slices/userSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import keycloak from "@/lib/keycloak";

export default function KeycloakClient() {
   const kc = useSelector((state) => state.keycloak);
   const dispatch = useDispatch();

   useEffect(() => {
      if(keycloak?.didInitialize) {
         return;
      }

      keycloak.init({
         onLoad: 'check-sso',
         silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
         redirectUri: process.env.NEXT_PUBLIC_URL + '/dashboard',
         token: kc.token,
         refreshToken: kc.refreshToken,
      })
      .then(authenticated => {
        if(!authenticated) {
            dispatch(clearKeycloak());
            dispatch(clearUser());
            keycloak.login();
        }
      });

      // Add these event listeners
      keycloak.onAuthSuccess = async () => {
         const userData = {
            id: keycloak.tokenParsed.sub,
            sessionId: keycloak.tokenParsed.sid,
            username: keycloak.tokenParsed.preferred_username,
            roles: keycloak.tokenParsed.realm_access?.roles || [],
            name: keycloak.tokenParsed.name,
            email: keycloak.tokenParsed.email
         };

         // 1. Set server session with user data
         fetch("/api/user/session", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({
               user: userData,
               isAuthenticated: true,
            }),
         })

         // 2. Create/update user in database
         .then(async () => {
            await fetch("/api/user/sync", {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify({
                  id: keycloak.tokenParsed.sub,
                  name: keycloak.tokenParsed.name,
                  email: keycloak.tokenParsed.email,
                  username: keycloak.tokenParsed.preferred_username,
               }),
            });
         })

         // 3. Set client session with user data
         .then(() => {
            dispatch(setToken(keycloak?.token));
            dispatch(setRefreshToken(keycloak?.refreshToken));
            dispatch(setUser(userData));
         })

         // 4. Retry login if error
         .catch(error => {
            console.log(error);
            dispatch(clearKeycloak());
            dispatch(clearUser());
            keycloak.login();
         });
      };
  }, [keycloak]);
}

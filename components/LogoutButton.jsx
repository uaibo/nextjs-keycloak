"use client";

import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "@/store/slices/userSlice";
import { clearKeycloak } from "@/store/slices/keycloakSlice";

import { useEffect, useState } from "react";

import keycloak from "@/lib/keycloak";

export default function LogoutButton() {
   const user = useSelector((state) => state.user.data);
   const dispatch = useDispatch();
   const [keycloakInstance, setKeycloakInstance] = useState(null);

   useEffect(() => {
      setKeycloakInstance(keycloak);
   }, [keycloak]);

   const handleLogout = () => {
    // 1. clear user and keycloak from redux
    dispatch(clearUser());
    dispatch(clearKeycloak());

    // 2. remove any server session if you have one
    fetch("/api/user/session", {
      method: "DELETE",
    });

    // 3. logout from keycloak
    if(keycloakInstance) {
      keycloakInstance.logout();
    }
   };

  return (
    <>
      <button onClick={() => handleLogout() } className="bg-red-500 text-white px-4 py-1 rounded-full hover:bg-red-600">
        Log out
      </button>
    </>
  );
}

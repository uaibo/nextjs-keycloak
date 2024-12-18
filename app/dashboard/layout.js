'use client'
import KeycloakClient from '@/components/KeycloakClient';
import { useSelector } from "react-redux";
import PageLoader from '@/components/PageLoader';

export default function DashboardLayout({ children }) {
  const user = useSelector((state) => state.user.data);

  // if user is not logged in, show the loading icon and let the keycloak client handle the login
  if (!user) {
    return (
      <>
        <KeycloakClient />
        <PageLoader />
      </>
    );
  }

  // if user is logged in, show the dashboard
  return (
    <>
      <KeycloakClient />
      {children}
    </>
  );
}

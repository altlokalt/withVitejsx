import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute = ({ element: Element }) => {
  const { pathname } = useLocation();
  const authenticationrequired = localStorage.getItem("authenticationRequired");

  if (
    !authenticationrequired &&
    ["/passwordrecovery", "/signup", "/loginone"].includes(pathname)
  ) {
    return <Navigate to="/" />;
  }
  return <Element />;
};

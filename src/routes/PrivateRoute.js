import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import AppLayout from "../components/molecules/appLayout";

const PrivateRoute = () => {
  const location = useLocation();
  const userCookie = Cookies.get("accessToken");
  useEffect(() => {
    if (location.pathname === "/") {
      window.location.href = "/sign-in";
    }
  }, [location]);
  return <AppLayout />;
  // userCookie ? <AppLayout /> : <Navigate to="sign-in" />;
};

export default PrivateRoute;

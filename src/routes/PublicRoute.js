import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const userCookie = Cookies.get("accessToken");
  if (userCookie && restricted) {
    return <Navigate to="/dashboard" replace />;
  }
  return <Component {...rest} />;
};

export default PublicRoute;

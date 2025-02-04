import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

export const PrivateRoute = ({ role, ...rest }) => {
  const accessToken = Cookies.get("ACCESS_TOKEN");
  const decoded = jwt_decode(accessToken);
  const user_role = decoded.data.role_id;

  if (user_role === Number(role)) {
    return <Outlet />;
  } else {
    <Navigate to="/" />;
  }
};

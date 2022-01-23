import React from "react";
import { useAuth } from "../../Context/AuthContext";
import { Route, Navigate } from "react-router-dom";

export function PrivateRoute({ path, ...props }) {
  const { login, setLogin } = useAuth();

  const loginStatus = localStorage.getItem("login");
  if (loginStatus) {
    setLogin(true);
  }
  return login || loginStatus ? (
    <Route path={path} {...props} />
  ) : (
    <Navigate state={{ from: path }} replace={true} to={"/login"} />
  );
}

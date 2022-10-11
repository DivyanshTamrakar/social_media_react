import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { checkStatus } from "../../features/auth/authSlice";
export function PrivateRoute({ children }) {
  const dispatch = useDispatch();
  dispatch(checkStatus());
  const { isAuthenticated } = useSelector((state) => state.auth);

  return isAuthenticated ? children : <Navigate replace={true} to="/login" />;
}

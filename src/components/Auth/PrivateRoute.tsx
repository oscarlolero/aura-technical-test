import { Navigate, Outlet } from 'react-router-dom';
import React, {useContext} from "react";
import {AuthContext} from "../../context/AuthContext.tsx";

export const PrivateRoute: React.FC = () => {
  const { isAuthenticated } = useContext(AuthContext);
  console.log(isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

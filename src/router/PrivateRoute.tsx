import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/context/AuthContext';

type PrivateRouteType = {
  children: React.ReactNode;
};

export const PrivateRoute = ({ children }: PrivateRouteType) => {
  const { authState } = useContext(AuthContext);
  return authState.logged ? children : <Navigate to="/login" />;
};

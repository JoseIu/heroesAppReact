import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/context/AuthContext';

type PublicRouteType = {
  children: React.ReactNode;
};
export const PublicRoute = ({ children }: PublicRouteType) => {
  const { authState } = useContext(AuthContext);

  return authState.logged ? <Navigate to="/" /> : children;
};

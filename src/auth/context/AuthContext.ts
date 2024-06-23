import { createContext } from 'react';
import { AuthReducerState } from './authReducer';

type AuthContextType = {
  authState: AuthReducerState;
  onLogin: (name: string) => void;
  onLogout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  authState: { logged: false, user: { id: '', name: null } },
  onLogin: () => null,
  onLogout: () => null,
});

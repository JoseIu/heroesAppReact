import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { AuthReducerState, UserReducerYpe, authReducer } from './authReducer';

type AuthProviderType = {
  children: React.ReactNode;
};

const initalState: AuthReducerState = {
  logged: false,
  user: {
    id: '',
    name: null,
  },
};

const init = () => {
  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : null;

  return {
    logged: !!user,
    user,
  };
};

export const AuthProvider = ({ children }: AuthProviderType) => {
  const [authState, dispatch] = useReducer(authReducer, initalState, init);

  const onLogin = (name: string) => {
    const user: UserReducerYpe = {
      id: '123',
      name,
    };
    localStorage.setItem('user', JSON.stringify(user));

    dispatch({
      type: 'signIn',
      payload: user,
    });
  };
  const onLogout = () => {
    localStorage.removeItem('user');

    dispatch({ type: 'signOut' });
  };

  return <AuthContext.Provider value={{ authState, onLogin, onLogout }}>{children}</AuthContext.Provider>;
};

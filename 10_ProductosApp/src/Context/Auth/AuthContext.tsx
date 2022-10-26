import React, {createContext, useReducer} from 'react';
import {StatusAuth, Usuario} from '../../Interfaces/appInterfaces';
import {authReducer, AuthState} from './authReducer';

type AuthContextProps = {
  errorMessage: string;
  token: string | null;
  user: Usuario | null;
  //status: 'checking' | 'authenticated' | 'not-authenticated';
  status: StatusAuth;
  signUp: () => void;
  signIn: () => void;
  logout: () => void;
  removeError: () => void;
};
const authInitialState: AuthState = {
  status: 'checking',
  token: null,
  user: null,
  errorMessage: '',
};
export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState);

  const signUp = () => {};
  const signIn = () => {};
  const logout = () => {};
  const removeError = () => {};

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signUp,
        signIn,
        logout,
        removeError,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

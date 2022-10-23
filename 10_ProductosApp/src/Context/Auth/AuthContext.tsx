import React, {createContext} from 'react';
import {StatusAuth, Usuario} from '../../Interfaces/appInterfaces';

type AuthContextProps = {
  errorMessage: string;
  toke: string | null;
  user: Usuario | null;
  //status: 'checking' | 'authenticated' | 'not-authenticated';
  status: StatusAuth;
  signUp: () => void;
  signIn: () => void;
  logout: () => void;
  removeError: () => void;
};
export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) => {
  return <AuthContext.Provider value={{
     
  }}>{children}</AuthContext.Provider>;
};

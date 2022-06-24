import React, {createContext, useReducer} from 'react';
import {authReducer} from './authReducer';

/**
 * Definir que información tendrá
 */
export interface AuthState {
  isLoggedIn: boolean;
  userName?: string;
  favoriteIcon?: string;
}
/**
 * Estado Inicial
 */
export const authInitialState: AuthState = {
  isLoggedIn: false,
  userName: undefined,
  favoriteIcon: undefined,
};
/**
 * Determina como luce y que expone el Contexto
 */
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
}
/**
 * Creamos el Contexto
 */
export const AuthContext = createContext({} as AuthContextProps);
/**
 * Proveedor del Estado
 */
export const AuthProvider = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);
  /**
   * Inicio de sesión
   * @returns authState
   */
  const signIn = () => dispatch({type: 'signIn'});
  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
      }}>
      {/** Mostramos los componentes hijos*/}
      {children}
    </AuthContext.Provider>
  );
};

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
  changeFavoriteIcon: (iconName: string) => void;
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
  /**
   *
   * @param iconName
   * @returns authState
   */
  const changeFavoriteIcon = (iconName: string) =>
    dispatch({type: 'changeFavIcon', payload: iconName});
  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        changeFavoriteIcon,
      }}>
      {/** Mostramos los componentes hijos*/}
      {children}
    </AuthContext.Provider>
  );
};

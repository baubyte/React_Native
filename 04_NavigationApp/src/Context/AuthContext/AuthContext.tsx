import React, {createContext} from 'react';

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
export const AuthProvider = ({children}: {children: JSX.Element[]}) => {
  return (
    <AuthContext.Provider
      value={{
        authState: authInitialState,
        signIn: () => {},
      }}>
      {/** Mostramos los componentes hijos*/}
      {children}
    </AuthContext.Provider>
  );
};

import React, {createContext, useReducer} from 'react';
import {
  LoginData,
  LoginResponse,
  StatusAuth,
  Usuario,
} from '../../Interfaces/appInterfaces';
import {authReducer, AuthState} from './authReducer';
import cafeApi from '../../Api/cafeApi';

type AuthContextProps = {
  errorMessage: string;
  token: string | null;
  user: Usuario | null;
  //status: 'checking' | 'authenticated' | 'not-authenticated';
  status: StatusAuth;
  signUp: () => void;
  signIn: (loginData: LoginData) => void;
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

  const signIn = async ({correo, password}: LoginData) => {
    try {
      const {
        data: {token, usuario},
      } = await cafeApi.post<LoginResponse>('/auth/login', {
        correo,
        password,
      });
      dispatch({type: 'signUp', payload: {token, user: usuario}});
    } catch (error) {
      dispatch({
        type: 'addError',
        payload: error.response.data.msg || 'Información Incorrecta',
      });
    }
  };
  const signUp = () => {};
  const logout = () => {};
  const removeError = () => dispatch({type: 'removeError'});

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

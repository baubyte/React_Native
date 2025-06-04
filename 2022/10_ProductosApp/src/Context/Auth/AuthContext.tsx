import React, {createContext, useEffect, useReducer} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  LoginData,
  LoginResponse,
  RegisterData,
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
  signUp: (registerData: RegisterData) => void;
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
  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    try {
      const tokenLocal = await AsyncStorage.getItem('token');
      if (!tokenLocal) {
        return dispatch({type: 'notAuthenticated'});
      }
      const {
        status,
        data: {token, usuario},
      } = await cafeApi.get<LoginResponse>('/auth');
      if (status !== 200) {
        return dispatch({type: 'notAuthenticated'});
      }
      await AsyncStorage.setItem('token', token);
      dispatch({type: 'signUp', payload: {token, user: usuario}});
    } catch (error) {
      console.log({error});
    }
  };

  const signIn = async ({correo, password}: LoginData) => {
    try {
      const {
        data: {token, usuario},
      } = await cafeApi.post<LoginResponse>('/auth/login', {
        correo,
        password,
      });
      dispatch({type: 'signUp', payload: {token, user: usuario}});
      await AsyncStorage.setItem('token', token);
    } catch (error) {
      dispatch({
        type: 'addError',
        payload: error.response.data.msg || 'Información Incorrecta',
      });
    }
  };
  const signUp = async ({nombre,correo, password}: RegisterData) => {
    try {
      const {
        data: {token, usuario},
      } = await cafeApi.post<LoginResponse>('/usuarios', {
        nombre,
        correo,
        password,
      });
      dispatch({type: 'signUp', payload: {token, user: usuario}});
      await AsyncStorage.setItem('token', token);
    } catch (error) {
      const messages = error.response.data.errors.map(error => error.msg);
      dispatch({
        type: 'addError',
        payload: messages.join(', ') || 'Revise la información',
      });
    }
  };
  const logout = async () => {
    await AsyncStorage.removeItem('token');
    dispatch({type: 'logout'});
  };
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

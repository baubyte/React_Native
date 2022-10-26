import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../Screens/LoginScreen';
import {RegisterScreen} from '../Screens/RegisterScreen';
import {ProtectedScreen} from '../Screens/ProtectedScreen';
import {AuthContext} from '../Context/Auth/AuthContext';
import {LoadingScreen} from '../Screens/LoadingScreen';

export type RootStackParams = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
  ProtectedScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  const {status} = useContext(AuthContext);
  if (status === 'checking') {
    return <LoadingScreen />;
  }
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      {status !== 'authenticated' ? (
        <>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </>
      ) : (
        <Stack.Screen name="ProtectedScreen" component={ProtectedScreen} />
      )}
    </Stack.Navigator>
  );
};

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../Screens/LoginScreen';
import {RegisterScreen} from '../Screens/RegisterScreen';
import {ProtectedScreen} from '../Screens/ProtectedScreen';

export type RootStackParams = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
  ProtectedScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="ProtectedScreen" component={ProtectedScreen} />
    </Stack.Navigator>
  );
};

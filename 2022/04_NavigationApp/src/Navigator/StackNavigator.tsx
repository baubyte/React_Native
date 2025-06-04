import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Page1Screen} from '../Screens/Page1Screen';
import {Page2Screen} from '../Screens/Page2Screen';
import {Page3Screen} from '../Screens/Page3Screen';
import {PersonScreen} from '../Screens/PersonScreen';

export type RootStackParams = {
  Page2Screen: undefined;
  Page1Screen: undefined;
  Page3Screen: undefined;
  PersonScreen: {id: number; name: string};
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      //initialRouteName="Page2Screen"
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="Page1Screen"
        options={{title: 'Pagina 1'}}
        component={Page1Screen}
      />
      <Stack.Screen
        name="Page2Screen"
        options={{title: 'Pagina 2'}}
        component={Page2Screen}
      />
      <Stack.Screen
        name="Page3Screen"
        options={{title: 'Pagina 3'}}
        component={Page3Screen}
      />
      <Stack.Screen
        name="PersonScreen"
        options={{title: 'Persona'}}
        component={PersonScreen}
      />
    </Stack.Navigator>
  );
};

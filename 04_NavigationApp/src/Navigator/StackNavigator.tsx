import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Page1Screen} from '../Screens/Page1Screen';
import {Page2Screen} from '../Screens/Page2Screen';
import {Page3Screen} from '../Screens/Page3Screen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Page1Screen" component={Page1Screen} />
      <Stack.Screen name="Page2Screen" component={Page2Screen} />
      <Stack.Screen name="Page3Screen" component={Page3Screen} />
    </Stack.Navigator>
  );
};

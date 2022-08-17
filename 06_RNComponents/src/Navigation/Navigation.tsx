import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../Screens/HomeScreen';
import {Animation101Screen} from '../Screens/Animation101Screen';
import {Animation102Screen} from '../Screens/Animation102Screen';
import {RootStackParams} from './types';
import {SwitchScreen} from '../Screens/SwitchScreen';
import {AlertScreen} from '../Screens/AlertScreen';
import {TextInputScreen} from '../Screens/TextInputScreen';

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
      <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
      <Stack.Screen name="AlertScreen" component={AlertScreen} />
      <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
    </Stack.Navigator>
  );
};

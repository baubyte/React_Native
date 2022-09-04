import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../Screens/HomeScreen';
import {PokemonScreen} from '../Screens/PokemonScreen';
import {RootStackParams} from './Types';

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
      <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
    </Stack.Navigator>
  );
};

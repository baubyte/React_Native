import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PokemonScreen} from '../Screens/PokemonScreen';
import {SearchScreen} from '../Screens/SearchScreen';
import {RootStackParams} from './Types';

const Tab = createStackNavigator<RootStackParams>();

export const TabSearchScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
      <Tab.Screen name="PokemonScreen" component={PokemonScreen} />
    </Tab.Navigator>
  );
};

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';
import {MapScreen} from '../Screens/MapScreen';
import {PermissionsScreen} from '../Screens/PermissionsScreen';

export type RootStackParams = {
  MapScreen: undefined;
  PermissionsScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <View>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: 'white',
          },
        }}
        initialRouteName="MapScreen">
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />
      </Stack.Navigator>
    </View>
  );
};

import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import {SettingsScreen} from '../Screens/SettingsScreen';
import {useWindowDimensions} from 'react-native';

const Drawer = createDrawerNavigator();

export const SideMenuBasic = () => {
  const {width} = useWindowDimensions();
  return (
    <Drawer.Navigator  screenOptions={{
        drawerType: width >= 1200 ? 'permanent' : 'front',
        drawerPosition: 'left',
      }}>
      <Drawer.Screen
        name="StackNavigator"
        options={{title: 'Home'}}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{title: 'Settings'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen} from '../Screens/Tab1Screen';
import {Tab2Screen} from '../Screens/Tab2Screen';
import {Tab3Screen} from '../Screens/Tab3Screen';

export type RootTabParams = {
  Tab1Screen: undefined;
  Tab2Screen: undefined;
  Tab3Screen: undefined;
};

const Tab = createBottomTabNavigator<RootTabParams>();

export const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab1Screen" component={Tab1Screen} />
      <Tab.Screen name="Tab2Screen" component={Tab2Screen} />
      <Tab.Screen name="Tab3Screen" component={Tab3Screen} />
    </Tab.Navigator>
  );
};

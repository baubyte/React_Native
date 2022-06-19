/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen} from '../Screens/Tab1Screen';
import {Tab2Screen} from '../Screens/Tab2Screen';
import {StackNavigator} from './StackNavigator';
import {colors} from '../Theme/appTheme';
import {Platform, Text} from 'react-native';

export type RootTabParams = {
  Tab1Screen: undefined;
  Tab2Screen: undefined;
  StackNavigator: undefined;
};
//Componente que rederiza de manera condicional
export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

//Botones Android
const BottomTabAndroid = createMaterialBottomTabNavigator();
/**
 * Tabs para Android
 * @returns React
 */
const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{backgroundColor: colors.primary}}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;
            case 'Tab2Screen':
              iconName = 'T2';
              break;
            case 'StackNavigator':
              iconName = 'ST';
              break;
          }
          return <Text style={{color}}>{iconName}</Text>;
        },
      })}>
      <BottomTabAndroid.Screen
        name="Tab1Screen"
        component={Tab1Screen}
        options={{
          title: 'Tab 1',
        }}
      />
      <BottomTabAndroid.Screen
        name="Tab2Screen"
        component={Tab2Screen}
        options={{
          title: 'Tab 2',
        }}
      />
      <BottomTabAndroid.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{title: 'Stack'}}
      />
    </BottomTabAndroid.Navigator>
  );
};

//Botones IOS
const BottomTabIOS = createBottomTabNavigator<RootTabParams>();
/**
 * Tabs para IOS
 * @returns React
 */
const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;
            case 'Tab2Screen':
              iconName = 'T2';
              break;
            case 'StackNavigator':
              iconName = 'ST';
              break;
          }
          return <Text style={{color}}>{iconName}</Text>;
        },
      })}>
      {/* <BottomTabIOS.Screen
        name="Tab1Screen"
        component={Tab1Screen}
        options={{
          title: 'Tab 1',
          tabBarIcon: props => <Text style={{color: props.color}}>T1</Text>,
          headerShown: false,
        }}
      /> */}
      <BottomTabIOS.Screen
        name="Tab1Screen"
        component={Tab1Screen}
        options={{
          title: 'Tab 1',
          headerShown: false,
        }}
      />
      <BottomTabIOS.Screen
        name="Tab2Screen"
        component={Tab2Screen}
        options={{
          title: 'Tab 2',
          headerShown: false,
        }}
      />
      <BottomTabIOS.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{title: 'Stack', headerShown: false}}
      />
    </BottomTabIOS.Navigator>
  );
};

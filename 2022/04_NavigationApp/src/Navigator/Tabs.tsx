/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen} from '../Screens/Tab1Screen';
import {StackNavigator} from './StackNavigator';
import {colors} from '../Theme/appTheme';
import {Platform} from 'react-native';
import {TopTabNavigator} from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

export type RootTabParams = {
  Tab1Screen: undefined;
  TopTabNavigator: undefined;
  StackNavigator: undefined;
};
//Componente que rederiza de manera condicional
export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

//Botones Android
const BottomTabAndroid = createMaterialBottomTabNavigator<RootTabParams>();
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
          shadowColor: 'transparent',
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'bandage-outline';
              break;
            case 'TopTabNavigator':
              iconName = 'basketball-outline';
              break;
            case 'StackNavigator':
              iconName = 'bookmarks-outline';
              break;
          }
          return <Icon name={iconName} size={20} color={color} />;
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
        name="TopTabNavigator"
        component={TopTabNavigator}
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
        headerShown: false,
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'bandage-outline';
              break;
            case 'TopTabNavigator':
              iconName = 'basketball-outline';
              break;
            case 'StackNavigator':
              iconName = 'bookmarks-outline';
              break;
          }
          return <Icon name={iconName} size={20} color={color} />;
        },
      })}>
      {/* <BottomTabIOS.Screen
        name="Tab1Screen"
        component={Tab1Screen}
        options={{
          title: 'Tab 1',
          tabBarIcon: props => <Text style={{color: props.color}}>T1</Text>,
        }}
      /> */}
      <BottomTabIOS.Screen
        name="Tab1Screen"
        component={Tab1Screen}
        options={{
          title: 'Tab 1',
        }}
      />
      <BottomTabIOS.Screen
        name="TopTabNavigator"
        component={TopTabNavigator}
        options={{
          title: 'Tab 2',
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

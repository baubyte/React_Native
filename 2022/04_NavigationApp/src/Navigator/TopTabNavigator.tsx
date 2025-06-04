/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ChatScreen} from '../Screens/ChatScreen';
import {ContactsScreen} from '../Screens/ContactsScreen';
import {AlbumsScreen} from '../Screens/AlbumsScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../Theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const {top: paddingTop} = useSafeAreaInsets();
  return (
    <Tab.Navigator
      style={{paddingTop}}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        tabBarPressColor: colors.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
        },
        tabBarStyle: {
          shadowColor: 'transparent',
          elevation: 0,
        },
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'ChatScreen':
              iconName = 'chatbox-ellipses-outline';
              break;
            case 'ContactsScreen':
              iconName = 'people-outline';
              break;
            case 'AlbumsScreen':
              iconName = 'albums-outline';
              break;
          }
          return <Icon name={iconName} size={20} color={color} />;
        },
      })}>
      <Tab.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{title: 'Chat'}}
      />
      <Tab.Screen
        name="ContactsScreen"
        component={ContactsScreen}
        options={{title: 'Contacts'}}
      />
      <Tab.Screen
        name="AlbumsScreen"
        component={AlbumsScreen}
        options={{title: 'Albums'}}
      />
    </Tab.Navigator>
  );
};

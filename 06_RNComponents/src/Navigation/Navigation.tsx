import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../Screens/HomeScreen';
import {Animation101Screen} from '../Screens/Animation101Screen';
import {Animation102Screen} from '../Screens/Animation102Screen';
import {RootStackParams} from './types';
import {SwitchScreen} from '../Screens/SwitchScreen';
import {AlertScreen} from '../Screens/AlertScreen';
import {TextInputScreen} from '../Screens/TextInputScreen';
import {PullToRefreshScreen} from '../Screens/PullToRefreshScreen';
import {CustomSectionListScreen} from '../Screens/CustomSectionListScreen';
import {ModalScreen} from '../Screens/ModalScreen';
import {InfiniteScrollScreen} from '../Screens/InfiniteScrollScreen';
import {SlidesScreen} from '../Screens/SlidesScreen';
import {ChangeThemeScreen} from '../Screens/ChangeThemeScreen';

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          //backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
      <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
      <Stack.Screen name="AlertScreen" component={AlertScreen} />
      <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
      <Stack.Screen
        name="PullToRefreshScreen"
        component={PullToRefreshScreen}
      />
      <Stack.Screen
        name="CustomSectionListScreen"
        component={CustomSectionListScreen}
      />
      <Stack.Screen name="ModalScreen" component={ModalScreen} />
      <Stack.Screen
        name="InfiniteScrollScreen"
        component={InfiniteScrollScreen}
      />
      <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
      <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen} />
    </Stack.Navigator>
  );
};

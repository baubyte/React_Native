import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParams} from './types';
import {ThemeContext} from '../Context/themeContext/ThemeContext';

import {HomeScreen} from '../Screens/HomeScreen';
import {Animation101Screen} from '../Screens/Animation101Screen';
import {Animation102Screen} from '../Screens/Animation102Screen';
import {SwitchScreen} from '../Screens/SwitchScreen';
import {AlertScreen} from '../Screens/AlertScreen';
import {TextInputScreen} from '../Screens/TextInputScreen';
import {PullToRefreshScreen} from '../Screens/PullToRefreshScreen';
import {CustomSectionListScreen} from '../Screens/CustomSectionListScreen';
import {ModalScreen} from '../Screens/ModalScreen';
import {InfiniteScrollScreen} from '../Screens/InfiniteScrollScreen';
import {SlidesScreen} from '../Screens/SlidesScreen';
import {ChangeThemeScreen} from '../Screens/ChangeThemeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {View} from 'react-native';

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  const {theme} = useContext(ThemeContext);
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{backgroundColor: theme.colors.background, flex: 1}}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen
            name="Animation101Screen"
            component={Animation101Screen}
          />
          <Stack.Screen
            name="Animation102Screen"
            component={Animation102Screen}
          />
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
          <Stack.Screen
            name="ChangeThemeScreen"
            component={ChangeThemeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

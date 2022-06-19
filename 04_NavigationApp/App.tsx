import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SideMenu} from './src/Navigator/SideMenu';
/* import {Tabs} from './src/Navigator/Tabs'; */
/* import {StackNavigator} from './src/Navigator/StackNavigator'; */
/* import {SideMenuBasic} from './src/Navigator/SideMenuBasic'; */

const App = () => (
  <NavigationContainer>
    {/* <StackNavigator /> */}
    {/* <SideMenuBasic /> */}
    <SideMenu />
    {/* <Tabs /> */}
  </NavigationContainer>
);
export default App;

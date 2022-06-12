import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
/* import {StackNavigator} from './src/Navigator/StackNavigator'; */
import {SideMenuBasic} from './src/Navigator/SideMenuBasic';

const App = () => (
  <NavigationContainer>
    {/* <StackNavigator /> */}
    <SideMenuBasic />
  </NavigationContainer>
);
export default App;

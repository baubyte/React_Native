import React from 'react';
import {SafeAreaView} from 'react-native';
/* import {BoxObjectModelScreen} from './src/Screens/BoxObjectModelScreen'; */
/* import {DimensionsScreen} from './src/Screens/DimensionsScreen'; */
import { PositionRelativeScreen } from './src/Screens/PositionRelativeScreen';
/* import {CounterScreen} from './src/Screens/CounterScreen'; */

export const App = () => (
  <SafeAreaView style={{ flex: 1 }}>
    {/* <CounterScreen /> */}
    {/* <BoxObjectModelScreen /> */}
    {/* <DimensionsScreen /> */}
    <PositionRelativeScreen/>
  </SafeAreaView>
);

import React from 'react';
import {SafeAreaView} from 'react-native';
import { FlexScreen } from './src/Screens/FlexScreen';
/* import {BoxObjectModelScreen} from './src/Screens/BoxObjectModelScreen'; */
/* import {DimensionsScreen} from './src/Screens/DimensionsScreen'; */
/* import { PositionScreen } from './src/Screens/PositionScreen'; */
/* import {CounterScreen} from './src/Screens/CounterScreen'; */

export const App = () => (
  <SafeAreaView style={{ flex: 1 }}>
    {/* <CounterScreen /> */}
    {/* <BoxObjectModelScreen /> */}
    {/* <DimensionsScreen /> */}
    {/* <PositionScreen/> */}
    <FlexScreen/>
  </SafeAreaView>
);

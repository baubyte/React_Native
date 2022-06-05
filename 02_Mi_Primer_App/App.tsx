import React from 'react';
import {SafeAreaView} from 'react-native';
/* import { FlexScreen } from './src/Screens/FlexScreen'; */
import { TareaScreen } from './src/Screens/TareaScreen';
/* import {BoxObjectModelScreen} from './src/Screens/BoxObjectModelScreen'; */
/* import {DimensionsScreen} from './src/Screens/DimensionsScreen'; */
/* import { PositionScreen } from './src/Screens/PositionScreen'; */
/* import {CounterScreen} from './src/Screens/CounterScreen'; */

export const App = () => (
  <SafeAreaView style={{flex: 1, backgroundColor: '#284258'}}>
    {/* <CounterScreen /> */}
    {/* <BoxObjectModelScreen /> */}
    {/* <DimensionsScreen /> */}
    {/* <PositionScreen/> */}
    {/* <FlexScreen/> */}
    <TareaScreen/>
  </SafeAreaView>
);

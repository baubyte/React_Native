import React from 'react';
import {SafeAreaView} from 'react-native';
import {BoxObjectModelScreen} from './src/Screens/BoxObjectModelScreen';
/* import {CounterScreen} from './src/Screens/CounterScreen'; */

export const App = () => {
  return (
    <SafeAreaView>
      <>
        {/* <CounterScreen /> */}
        <BoxObjectModelScreen />
      </>
    </SafeAreaView>
  );
};

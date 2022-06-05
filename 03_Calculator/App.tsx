import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {CalculatorScreen} from './src/Screens/CalculatorScreen';
import {styles} from './src/Theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <CalculatorScreen />
    </SafeAreaView>
  );
};
export default App;

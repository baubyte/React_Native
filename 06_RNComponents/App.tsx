import 'react-native-gesture-handler';
import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  Theme,
} from '@react-navigation/native';
import {Navigation} from './src/Navigation/Navigation';

const customTheme: Theme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    /* primary: 'string',
    background: 'black',
    card: 'string',
    text: 'string',
    border: 'string',
    notification: 'string', */
  },
};
const App = () => {
  return (
    <NavigationContainer theme={customTheme}>
      <Navigation />
    </NavigationContainer>
  );
};
export default App;

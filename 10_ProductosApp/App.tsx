import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './src/Navigation/Navigation';
import {AuthProvider} from './src/Context/Auth/AuthContext';

const AppState = ({children}: {children: JSX.Element[] | JSX.Element}) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigation />
      </AppState>
    </NavigationContainer>
  );
};
export default App;

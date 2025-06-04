import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './src/Navigation/Navigation';
import {AuthProvider} from './src/Context/Auth/AuthContext';
import {ProductProvider} from './src/Context/Product/ProductContext';
import {ChildrenComponent} from './src/Interfaces/appInterfaces';

const AppState = ({children}: ChildrenComponent) => {
  return (
    <AuthProvider>
      <ProductProvider>{children}</ProductProvider>
    </AuthProvider>
  );
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

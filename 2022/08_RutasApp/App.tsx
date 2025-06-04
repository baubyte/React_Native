import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './src/Navigation/Navigation';
import {PermissionsProvider} from './src/Context/Permission/PermissionsContext';

const AppState = ({children}: {children: JSX.Element[] | JSX.Element}) => {
  return <PermissionsProvider>{children}</PermissionsProvider>;
};
const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigation />
      </AppState>
    </NavigationContainer>
  );
};
export default App;

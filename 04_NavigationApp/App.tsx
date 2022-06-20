import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SideMenu} from './src/Navigator/SideMenu';
import {AuthProvider} from './src/Context/AuthContext/AuthContext';
/* import {Tabs} from './src/Navigator/Tabs'; */
/* import {StackNavigator} from './src/Navigator/StackNavigator'; */
/* import {SideMenuBasic} from './src/Navigator/SideMenuBasic'; */

const App = () => (
  <NavigationContainer>
    <AppState>
      {/* <StackNavigator /> */}
      {/* <SideMenuBasic /> */}
      <SideMenu />
      {/* <Tabs /> */}
    </AppState>
  </NavigationContainer>
);
/**
 * Estado de la Aplicacion
 * @param
 * @returns JSX
 */
const AppState = ({children}: any) => {
  return (
    <AuthProvider>
      {/** Mostramos los componentes hijos*/}
      {children}
    </AuthProvider>
  );
};
export default App;

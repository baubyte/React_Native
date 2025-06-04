import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './src/Navigation/Navigation';
import {GradientProvider} from './src/Context/GradientContext';
/* import {FadeScreen} from './src/Screens/FadeScreen'; */

const AppState = ({children}: {children: JSX.Element[] | JSX.Element}) => {
  return (
    <GradientProvider>
      {/** Mostramos los componentes hijos*/}
      {children}
    </GradientProvider>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigation />
        {/* <FadeScreen /> */}
      </AppState>
    </NavigationContainer>
  );
};
export default App;

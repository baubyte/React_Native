import 'react-native-gesture-handler';
import React from 'react';
import {Navigation} from './src/Navigation/Navigation';
import {ThemeProvider} from './src/Context/themeContext/ThemeContext';

/* const customTheme: Theme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    primary: 'string',
    background: 'black',
    card: 'string',
    text: 'string',
    border: 'string',
    notification: 'string',
  },
}; */
const App = () => {
  return (
    <AppState>
      <Navigation />
    </AppState>
  );
};
/**
 * Estado de la Aplicacion
 * @param
 * @returns JSX
 */
const AppState = ({children}: {children: JSX.Element[] | JSX.Element}) => {
  return (
    <ThemeProvider>
      {/** Mostramos los componentes hijos*/}
      {children}
    </ThemeProvider>
  );
};
export default App;

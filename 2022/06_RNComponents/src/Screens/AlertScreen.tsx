import React, {useContext} from 'react';
import {Alert, Button, View} from 'react-native';
import prompt from 'react-native-prompt-android';
import {HeaderTitle} from '../Components/HeaderTitle';
import {Separator} from '../Components/Separator';
import {ThemeContext} from '../Context/themeContext/ThemeContext';
import {styles} from '../Theme/appTheme';

export const AlertScreen = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const showAlert = () => {
    Alert.alert(
      'Titulo',
      'Mensaje del Alerta',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {
        cancelable: true,
        onDismiss: () => console.log('onDismiss'),
      },
    );
  };
  const showPrompt = () => {
    /* Solo IOS
      Alert.prompt(
      '¿Estas Seguro?',
      'Mensaje',
      (value: string) => console.log('Info:', value),
      'plain-text',
      'Hola Mundo',
      'number-pad',
    ); */
    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: password => console.log('OK Pressed, password: ' + password),
        },
      ],
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'placeholder',
      },
    );
  };

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alert" />
      <Button
        title="Mostrar Alerta"
        onPress={showAlert}
        color={colors.primary}
      />
      <Separator />
      <Button
        title="Mostrar Prompt"
        onPress={showPrompt}
        color={colors.primary}
      />
    </View>
  );
};

import React from 'react';
import {Alert, Button, View} from 'react-native';
import {HeaderTitle} from '../Components/HeaderTitle';
import {styles} from '../Theme/appTheme';

export const AlertScreen = () => {
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
    Alert.prompt(
      '¿Estas Seguro?',
      'Mensaje',
      (value: string) => console.log('Info:', value),
      'plain-text',
      'Hola Mundo',
      'number-pad',
    );
  };
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alert" />
      <Button title="Mostrar Alerta" onPress={showAlert} />
      <Button title="Mostrar Prompt" onPress={showPrompt} />
    </View>
  );
};

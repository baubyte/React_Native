import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../Theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Page1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page1Screen</Text>
      <Button
        title="Ir Pagina 2"
        onPress={() => navigation.navigate('Page2Screen')}
      />
    </View>
  );
};

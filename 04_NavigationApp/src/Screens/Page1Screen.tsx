import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
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
      <Text style={styles.subTitle}>Navegar con Argumentos</Text>
      <View style={styles.buttonsPersons}>
        <TouchableOpacity
          style={{
            ...styles.buttonLarge,
            backgroundColor: '#5856D6',
          }}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 1,
              name: 'BAUBYTE',
            })
          }>
          <Text style={styles.buttonLargeText}>BAUBYTE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.buttonLarge,
            backgroundColor: '#FF9427',
          }}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 2,
              name: 'DALY',
            })
          }>
          <Text style={styles.buttonLargeText}>DALY</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

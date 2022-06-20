/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {DrawerScreenProps} from '@react-navigation/drawer';
/* import {StackScreenProps} from '@react-navigation/stack'; */
import React, {useEffect} from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors, styles} from '../Theme/appTheme';

//interface Props extends StackScreenProps<any, any> {}
interface Props extends DrawerScreenProps<any, any> {}

export const Page1Screen = ({navigation}: Props) => {
  useEffect(() => {
    /**
     * Agregamos el botón para mostrar el sidebar
     */
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{
            marginLeft: 10,
          }}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu-outline" color={colors.primary} size={35} />
        </TouchableOpacity>
      ),
    });
  }, []);
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
          <Icon name="body-outline" color="white" size={35} />
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
          <Icon name="paw-outline" color="white" size={35} />
          <Text style={styles.buttonLargeText}>DALY</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

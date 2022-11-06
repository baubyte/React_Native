import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Spacer} from '../Components/Spacer';
import {ProductsStackParams} from '../Navigation/ProductsNavigation';

interface Props
  extends StackScreenProps<ProductsStackParams, 'ProductScreen'> {}

export const ProductScreen = ({navigation, route}: Props) => {
  const {id, name = ''} = route.params;
  useEffect(() => {
    navigation.setOptions({
      title: name ? name : 'Nuevo Producto',
    });
  }, []);
  return (
    <View style={internalStyles.container}>
      <ScrollView>
        <Text style={internalStyles.label}>Nombre del Producto: </Text>
        <TextInput placeholder="Producto" style={internalStyles.textInput} />
        {/**Picker / Selector */}
        <Text style={internalStyles.label}>Categoria: </Text>
        <Button title="Guardar" onPress={() => {}} color="#5856D6" />
        <View style={internalStyles.containerButtons}>
          <Button title="Cámara" onPress={() => {}} color="#5856D6" />
          <Spacer />
          <Button title="Galería" onPress={() => {}} color="#5856D6" />
        </View>
      </ScrollView>
    </View>
  );
};
const internalStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 20,
  },
  label: {
    fontSize: 18,
  },
  textInput: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    borderColor: 'rgba(0, 0, 0,0.2)',
    height: 45,
    marginTop: 5,
    marginBottom: 15,
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
});

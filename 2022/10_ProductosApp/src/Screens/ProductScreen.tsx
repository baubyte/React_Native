import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext, useEffect} from 'react';
import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Spacer} from '../Components/Spacer';
import {ProductsStackParams} from '../Navigation/ProductsNavigation';
import {useCategories} from '../Hooks/useCategories';
import {useForm} from '../Hooks/useForm';
import {ProductContext} from '../Context/Product/ProductContext';

interface Props
  extends StackScreenProps<ProductsStackParams, 'ProductScreen'> {}

export const ProductScreen = ({navigation, route}: Props) => {
  const {id = '', name = ''} = route.params;
  const {categories} = useCategories();
  const {loadProductById, addProduct, updateProduct} = useContext(ProductContext);
  const {_id, categoriaId, nombre, img, form, onChange, setFormValue} = useForm(
    {
      _id: id,
      categoriaId: '',
      nombre: name,
      img: '',
    },
  );

  useEffect(() => {
    navigation.setOptions({
      title: nombre ? nombre : 'Sin Nombre del Producto',
    });
  }, [nombre]);

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    if (id.length === 0) {
      return;
    }
    const product = await loadProductById(id);
    setFormValue({
      _id: id,
      categoriaId: product.categoria._id,
      img: product.img || '',
      nombre,
    });
  };
  const saveOrUpdate = async () => {
    if (id.length > 0) {
      updateProduct(categoriaId, nombre, id);
    } else {
      if (categoriaId.length === 0) {
        Alert.alert('Seleccione una Categoria');
        return;
      }
      const newProduct = await addProduct(categoriaId, nombre);
      onChange(newProduct._id, '_id');
    }
  };
  return (
    <View style={internalStyles.container}>
      <ScrollView>
        <Text style={internalStyles.label}>Nombre del Producto: </Text>
        <TextInput
          placeholder="Producto"
          style={internalStyles.textInput}
          value={nombre}
          onChangeText={value => onChange(value, 'nombre')}
        />
        {/**Picker / Selector */}
        <Text style={internalStyles.label}>Categoria:</Text>
        <Picker
          selectedValue={categoriaId}
          onValueChange={value => onChange(value, 'categoriaId')}>
          <Picker.Item label="Seleccionar Categoria" value="0" />
          {categories.map(category => (
            <Picker.Item
              label={category.nombre}
              value={category._id}
              key={category._id}
            />
          ))}
        </Picker>
        <Button title="Guardar" onPress={saveOrUpdate} color="#5856D6" />
        {_id.length > 0 && (
          <View style={internalStyles.containerButtons}>
            <Button title="Cámara" onPress={() => {}} color="#5856D6" />
            <Spacer />
            <Button title="Galería" onPress={() => {}} color="#5856D6" />
          </View>
        )}
        {img.length > 0 && (
          <Image source={{uri: img}} style={internalStyles.imageProduct} />
        )}
        <Text>{JSON.stringify(form, null, 5)}</Text>
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
  imageProduct: {
    marginTop: 20,
    width: '100%',
    height: 300,
  },
});

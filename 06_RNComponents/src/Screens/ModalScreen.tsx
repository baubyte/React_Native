import React, {useState} from 'react';
import {Button, Modal, StyleSheet, Text, View} from 'react-native';
import {HeaderTitle} from '../Components/HeaderTitle';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View>
      <HeaderTitle title="Modal Screen" />
      <Button title="Abrir Modal" onPress={() => setIsVisible(true)} />
      <Modal animationType="slide" visible={isVisible} transparent>
        {/* Background Negro */}
        <View style={internalStyles.modal}>
          {/* Contenido del Modal */}
          <View style={internalStyles.contentModal}>
            <Text style={internalStyles.titleModal}>Modal</Text>
            <Text style={internalStyles.textContentModal}>
              Cuerpo del Modal
            </Text>
            <Button title="Cerrar Modal" onPress={() => setIsVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};
const internalStyles = StyleSheet.create({
  modal: {
    flex: 1,
    //width: 100,
    //height: 100,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleModal: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textContentModal: {
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 20,
  },
  contentModal: {
    backgroundColor: 'white',
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.29,
    elevation: 10,
    borderRadius: 5,
  },
});

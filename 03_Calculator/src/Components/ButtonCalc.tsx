import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

/**@interface Props */
interface Props {
  text: string;
  /* #9B9B9B gris claro
   * #2D2D2D gris oscuro
   * #FF9427 gris naranja
   **/
  color?: string;
  textColor?: string;
  buttonWidth?: boolean;
}

export const ButtonCalc = ({
  text,
  color = '#2D2D2D',
  textColor = 'white',
  buttonWidth = false,
}: Props) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          ...styles.button,
          backgroundColor: color,
          width: buttonWidth ? 160 : 80,
        }}>
        <Text
          style={{
            ...styles.buttonText,
            color: textColor,
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 80,
    backgroundColor: '#2D2D2D',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
});

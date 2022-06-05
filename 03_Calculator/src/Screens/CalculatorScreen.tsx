import React from 'react';
import {Text, View} from 'react-native';
import {ButtonCalc} from '../Components/ButtonCalc';
import {styles} from '../Theme/appTheme';

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.littleResult}>1.500,00</Text>
      <Text style={styles.result}>1.500,00</Text>
      {/* Fila de Botones */}
      <View style={styles.row}>
        <ButtonCalc text="C" color="#9B9B9B" textColor="black" />
        <ButtonCalc text="+/-" color="#9B9B9B" textColor="black" />
        <ButtonCalc text="del" color="#9B9B9B" textColor="black" />
        <ButtonCalc text="/" color="#FF9427" />
      </View>
      {/* Fila de Botones */}
      <View style={styles.row}>
        <ButtonCalc text="7" />
        <ButtonCalc text="8" />
        <ButtonCalc text="9" />
        <ButtonCalc text="X" color="#FF9427" />
      </View>
      {/* Fila de Botones */}
      <View style={styles.row}>
        <ButtonCalc text="4" />
        <ButtonCalc text="5" />
        <ButtonCalc text="6" />
        <ButtonCalc text="-" color="#FF9427" />
      </View>
      {/* Fila de Botones */}
      <View style={styles.row}>
        <ButtonCalc text="1" />
        <ButtonCalc text="2" />
        <ButtonCalc text="3" />
        <ButtonCalc text="+" color="#FF9427" />
      </View>
      {/* Fila de Botones */}
      <View style={styles.row}>
        <ButtonCalc text="0" buttonWidth />
        <ButtonCalc text="," />
        <ButtonCalc text="=" color="#FF9427" />
      </View>
    </View>
  );
};

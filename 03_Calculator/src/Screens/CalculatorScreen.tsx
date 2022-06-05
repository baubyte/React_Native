import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {ButtonCalc} from '../Components/ButtonCalc';
import {styles} from '../Theme/appTheme';

export const CalculatorScreen = () => {
  /**
   * Numero actual el que se esta ingresando o el resultado
   */
  const [number, setNumber] = useState('0');
  /**
   * Numero anterior puede ser el resultado anterior
   */
  const [previousNumber, setPreviousNumber] = useState('0');
  /**
   * Limpiar el numero
   */
  const clear = () => {
    setNumber('0');
  };
  /**
   * Para armar el numero
   * @param textNumber
   */
  const numberConstruct = (textNumber: string) => {
    setNumber(number + textNumber);
  };
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.littleResult}>{previousNumber}</Text>
      <Text
        style={styles.result}
        //Mostrar en una linea
        numberOfLines={1}
        //Ajustar el contenido
        adjustsFontSizeToFit>
        {number}
      </Text>
      {/* Fila de Botones */}
      <View style={styles.row}>
        <ButtonCalc text="C" color="#9B9B9B" textColor="black" action={clear} />
        <ButtonCalc text="+/-" color="#9B9B9B" textColor="black" />
        <ButtonCalc text="del" color="#9B9B9B" textColor="black" />
        <ButtonCalc text="/" color="#FF9427" action={clear} />
      </View>
      {/* Fila de Botones */}
      <View style={styles.row}>
        <ButtonCalc text="7" action={numberConstruct} />
        <ButtonCalc text="8" action={numberConstruct} />
        <ButtonCalc text="9" action={numberConstruct} />
        <ButtonCalc text="X" color="#FF9427" action={clear} />
      </View>
      {/* Fila de Botones */}
      <View style={styles.row}>
        <ButtonCalc text="4" action={numberConstruct} />
        <ButtonCalc text="5" action={numberConstruct} />
        <ButtonCalc text="6" action={numberConstruct} />
        <ButtonCalc text="-" color="#FF9427" action={clear} />
      </View>
      {/* Fila de Botones */}
      <View style={styles.row}>
        <ButtonCalc text="1" action={numberConstruct} />
        <ButtonCalc text="2" action={numberConstruct} />
        <ButtonCalc text="3" action={numberConstruct} />
        <ButtonCalc text="+" color="#FF9427" action={clear} />
      </View>
      {/* Fila de Botones */}
      <View style={styles.row}>
        <ButtonCalc text="0" action={numberConstruct} buttonWidth />
        <ButtonCalc text="," action={numberConstruct} />
        <ButtonCalc text="=" color="#FF9427" action={clear} />
      </View>
    </View>
  );
};

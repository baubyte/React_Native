import React from 'react';
import {Text, View} from 'react-native';
import {ButtonCalc} from '../Components/ButtonCalc';
import {styles} from '../Theme/appTheme';
import {useCalculator} from '../Hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    number,
    previousNumber,
    numberConstruct,
    positiveNegative,
    clear,
    btnDelete,
    btnDivide,
    btnMultiply,
    btnSubtract,
    btnAdd,
    calculate,
  } = useCalculator();
  return (
    <View style={styles.calculatorContainer}>
      {previousNumber !== '0' && (
        <Text style={styles.littleResult}>{previousNumber}</Text>
      )}
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
        <ButtonCalc
          text="+/-"
          color="#9B9B9B"
          textColor="black"
          action={positiveNegative}
        />
        <ButtonCalc
          text="del"
          color="#9B9B9B"
          textColor="black"
          action={btnDelete}
        />
        <ButtonCalc text="/" color="#FF9427" action={btnDivide} />
      </View>
      {/* Fila de Botones */}
      <View style={styles.row}>
        <ButtonCalc text="7" action={numberConstruct} />
        <ButtonCalc text="8" action={numberConstruct} />
        <ButtonCalc text="9" action={numberConstruct} />
        <ButtonCalc text="X" color="#FF9427" action={btnMultiply} />
      </View>
      {/* Fila de Botones */}
      <View style={styles.row}>
        <ButtonCalc text="4" action={numberConstruct} />
        <ButtonCalc text="5" action={numberConstruct} />
        <ButtonCalc text="6" action={numberConstruct} />
        <ButtonCalc text="-" color="#FF9427" action={btnSubtract} />
      </View>
      {/* Fila de Botones */}
      <View style={styles.row}>
        <ButtonCalc text="1" action={numberConstruct} />
        <ButtonCalc text="2" action={numberConstruct} />
        <ButtonCalc text="3" action={numberConstruct} />
        <ButtonCalc text="+" color="#FF9427" action={btnAdd} />
      </View>
      {/* Fila de Botones */}
      <View style={styles.row}>
        <ButtonCalc text="0" action={numberConstruct} buttonWidth />
        <ButtonCalc text="," action={numberConstruct} />
        <ButtonCalc text="=" color="#FF9427" action={calculate} />
      </View>
    </View>
  );
};

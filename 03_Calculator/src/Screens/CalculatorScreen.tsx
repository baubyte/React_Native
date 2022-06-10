import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {ButtonCalc} from '../Components/ButtonCalc';
import {styles} from '../Theme/appTheme';

/**
 * Enumeración para las operadores
 */
enum Operators {
  add,
  subtract,
  multiply,
  divide,
}

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
   * Referencia para no renderizar todo el
   * componente si cambia el valor
   */
  const lastOperation = useRef<Operators>();
  /**
   * Limpiar el numero
   */
  const clear = () => {
    setNumber('0');
    setPreviousNumber('0');
  };
  /**
   * Para armar el numero
   * @param textNumber
   */
  const numberConstruct = (textNumber: string) => {
    //Si ya existe una coma decimal
    if (number.includes(',') && textNumber === ',') {
      return;
    }
    //Si el numero comienza con 0
    if (number.startsWith('0') || number.startsWith('-0')) {
      //Si es la coma decimal
      if (textNumber === ',') {
        setNumber(`${number}${textNumber}`);
        //Si es otro 0 y hay una coma decimal
      } else if (textNumber === '0' && number.includes(',')) {
        setNumber(`${number}${textNumber}`);
        //Si es diferente de 0 y no tiene una coma
      } else if (textNumber !== '0' && !number.includes(',')) {
        setNumber(`${textNumber}`);
        //Evitar el 000.000
      } else if (textNumber === '0' && !number.includes(',')) {
        setNumber(`${number}`);
      } else {
        setNumber(`${number}${textNumber}`);
      }
    } else {
      setNumber(`${number}${textNumber}`);
    }
  };
  /**
   * Función Botón +/-
   */
  const positiveNegative = () => {
    //Si el numero actual tiene es negativo
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber(`-${number}`);
    }
  };
  /**
   * Función Botón DEL
   */
  const btnDelete = () => {
    let negative = '';
    let tempNumber = number;
    //Para saber si era negativo
    if (number.includes('-')) {
      negative = '-';
      tempNumber = number.substr(1);
    }
    //Si hay mas de un carácter le saco el ultimo
    if (tempNumber.length > 1) {
      setNumber(`${negative}${tempNumber.slice(0, -1)}`);
    } else {
      setNumber('0');
    }
  };
  /**
   * Función para cambiar el numero actual al
   * anterior para las operaciones
   */
  const changeNumberForPrevious = () => {
    //Si termina con un punto lo quitamos
    if (number.endsWith('.')) {
      setPreviousNumber(number.slice(0, -1));
    } else {
      setPreviousNumber(number);
    }
    setNumber('0');
  };
  /**
   * Función Botón Dividir
   */
  const btnDivide = () => {
    changeNumberForPrevious();
    lastOperation.current = Operators.divide;
  };
  /**
   * Función Botón Multiplicar
   */
  const btnMultiply = () => {
    changeNumberForPrevious();
    lastOperation.current = Operators.multiply;
  };
  /**
   * Función Botón Sumar
   */
  const btnAdd = () => {
    changeNumberForPrevious();
    lastOperation.current = Operators.add;
  };
  /**
   * Función Botón Restar
   */
  const btnSubtract = () => {
    changeNumberForPrevious();
    lastOperation.current = Operators.subtract;
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
        <ButtonCalc text="=" color="#FF9427" action={clear} />
      </View>
    </View>
  );
};

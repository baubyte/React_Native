import {useRef, useState} from 'react';
/**
 * Enumeración para las operadores
 */
enum Operators {
  add,
  subtract,
  multiply,
  divide,
}

export const useCalculator = () => {
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
  /**
   * Función para realizar la operación aritmética
   */
  const calculate = () => {
    const numberCurrent = Number(number.replace(',', '.'));
    const numberPrevious = Number(previousNumber.replace(',', '.'));

    switch (lastOperation.current) {
      case Operators.add:
        setNumber(`${numberCurrent + numberPrevious}`.replace('.', ','));
        break;
      case Operators.subtract:
        setNumber(`${numberPrevious - numberCurrent}`.replace('.', ','));
        break;
      case Operators.multiply:
        setNumber(`${numberCurrent * numberPrevious}`.replace('.', ','));
        break;
      case Operators.divide:
        setNumber(`${numberPrevious / numberCurrent}`.replace('.', ','));
        break;
    }
    setPreviousNumber('0');
  };
  return {
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
  };
};

import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CustomSwitch} from '../Components/CustomSwitch';
import {HeaderTitle} from '../Components/HeaderTitle';
import {Spacer} from '../Components/Spacer';
import {ThemeContext} from '../Context/themeContext/ThemeContext';

export const SwitchScreen = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });
  /**
   *
   * @param value
   * @param field
   */
  const onChange = (value: boolean, field: keyof typeof state) => {
    setState({
      ...state,
      [field]: value,
    });
  };
  const {isActive, isHungry, isHappy} = state;
  return (
    <View style={internalStyles.container}>
      <HeaderTitle title="Switches" />
      <View style={internalStyles.switchRow}>
        <Text style={{...internalStyles.switchText, color: colors.text}}>
          isActive
        </Text>
        <Spacer />
        <CustomSwitch
          isOn={isActive}
          onChange={value => onChange(value, 'isActive')}
        />
      </View>
      <View style={internalStyles.switchRow}>
        <Text style={{...internalStyles.switchText, color: colors.text}}>
          isHungry
        </Text>
        <Spacer />
        <CustomSwitch
          isOn={isHungry}
          onChange={value => onChange(value, 'isHungry')}
        />
      </View>
      <View style={internalStyles.switchRow}>
        <Text style={{...internalStyles.switchText, color: colors.text}}>
          isHappy
        </Text>
        <Spacer />
        <CustomSwitch
          isOn={isHappy}
          onChange={value => onChange(value, 'isHappy')}
        />
      </View>
      <Text style={{...internalStyles.switchText, color: colors.text}}>
        {JSON.stringify(state, null, 6)}
      </Text>
    </View>
  );
};
const internalStyles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  switchRow: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  switchText: {
    fontSize: 25,
  },
});

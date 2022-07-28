import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../Theme/appTheme';
interface Props {
  title: string;
  color?: string;
}
export const HeaderTitle = ({title, color = '#5856D6'}: Props) => {
  const {top} = useSafeAreaInsets();
  return (
    <View style={{...internalStyles.headerListContainer, marginTop: top + 20}}>
      <Text style={{...styles.title, color}}>{title}</Text>
    </View>
  );
};
const internalStyles = StyleSheet.create({
  headerListContainer: {
    marginBottom: 20,
  },
});

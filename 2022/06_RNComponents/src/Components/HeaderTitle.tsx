import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeContext} from '../Context/themeContext/ThemeContext';
import {styles} from '../Theme/appTheme';
interface Props {
  title: string;
}
export const HeaderTitle = ({title}: Props) => {
  const {top} = useSafeAreaInsets();
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={{...internalStyles.headerListContainer, marginTop: top + 20}}>
      <Text style={{...styles.title, color: colors.text}}>{title}</Text>
    </View>
  );
};
const internalStyles = StyleSheet.create({
  headerListContainer: {
    marginBottom: 20,
  },
});

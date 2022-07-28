import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../Theme/appTheme';
interface Props {
  title: string;
}
export const HeaderTitle = ({title}: Props) => {
  const {top} = useSafeAreaInsets();
  return (
    <View style={{...internalStyles.headerListContainer, marginTop: top + 20}}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
const internalStyles = StyleSheet.create({
  headerListContainer: {
    marginBottom: 20,
  },
});

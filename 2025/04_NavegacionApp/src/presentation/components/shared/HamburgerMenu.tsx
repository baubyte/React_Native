import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { IonIcon } from './IonIcon';
import { globalColors } from '../../theme/theme';

export const HamburgerMenu = () => {
  const navigation = useNavigation();
  const renderHeaderLeft = () => <HeaderLeft onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />;
  useEffect(() => {
    navigation.setOptions({
      headerLeft: renderHeaderLeft,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (<></>);
};

const HeaderLeft = ({ onPress }: { onPress: () => void }) => (
  <Pressable style={styles.pressable} onPress={onPress}>
    <IonIcon name="menu-outline" size={24} color={globalColors.primary} />
  </Pressable>
);

const styles = StyleSheet.create({
  pressable: {
    padding: 5,
  },
});

import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Pressable, Text } from 'react-native';

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
  <Pressable onPress={onPress}>
    <Text>
      Menu
    </Text>
  </Pressable>
);

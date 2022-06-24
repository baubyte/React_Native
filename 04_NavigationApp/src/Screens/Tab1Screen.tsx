import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../Theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {TouchableIcon} from '../Components/TouchableIcon';

export const Tab1Screen = () => {
  const {top: marginTop} = useSafeAreaInsets();
  useEffect(() => console.log('Tab1Screen Effect'), []);

  return (
    <View style={{...styles.globalMargin, marginTop}}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="attach-outline" />
        <TouchableIcon iconName="bonfire-outline" />
        <TouchableIcon iconName="calculator-outline" />
        <TouchableIcon iconName="chatbubble-ellipses-outline" />
        <TouchableIcon iconName="images-outline" />
        <TouchableIcon iconName="leaf-outline" />
      </Text>
    </View>
  );
};

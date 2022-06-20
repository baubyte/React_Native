import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text, View} from 'react-native';
import {colors, styles} from '../Theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const Tab1Screen = () => {
  const {top: marginTop} = useSafeAreaInsets();
  useEffect(() => console.log('Tab1Screen Effect'), []);

  return (
    <View style={{...styles.globalMargin, marginTop}}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <Icon name="airplane-outline" size={80} color={colors.primary} />
        <Icon name="attach-outline" size={80} color={colors.primary} />
        <Icon name="bonfire-outline" size={80} color={colors.primary} />
        <Icon name="calculator-outline" size={80} color={colors.primary} />
        <Icon
          name="chatbubble-ellipses-outline"
          size={80}
          color={colors.primary}
        />
        <Icon name="images-outline" size={80} color={colors.primary} />
        <Icon name="leaf-outline" size={80} color={colors.primary} />
      </Text>
    </View>
  );
};

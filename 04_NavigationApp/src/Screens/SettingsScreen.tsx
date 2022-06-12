import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../Theme/appTheme';

export const SettingsScreen = () => {
  /**
   * Hook del SafeArea
   */
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        ...styles.globalMargin,
        marginTop: insets.top,
      }}>
      <Text style={styles.title}>SettingsScreen</Text>
    </View>
  );
};

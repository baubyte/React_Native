import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AuthContext} from '../Context/AuthContext/AuthContext';
import {styles} from '../Theme/appTheme';

export const SettingsScreen = () => {
  const {authState} = useContext(AuthContext);
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
      <Text>{JSON.stringify(authState, null, 4)}</Text>
    </View>
  );
};

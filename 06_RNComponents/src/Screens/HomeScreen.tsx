import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const HomeScreen = () => {
  return (
    <View>
      <Icon name="arrow-back-outline" size={30} color="red" />
      <Text>HomeScreen</Text>
    </View>
  );
};

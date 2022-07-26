import React from 'react';
import {Animated, Button, StyleSheet, View} from 'react-native';
import {useAnimation} from '../Hooks/useAnimation';

export const Animation101Screen = () => {
  const {fadeIn, fadeOut, opacity, position, startMovingPosition} =
    useAnimation();
  return (
    <View style={internalStyles.container}>
      <Animated.View
        style={{
          ...internalStyles.purpleBox,
          opacity,
          transform: [
            {
              translateY: position,
            },
          ],
        }}
      />
      <Button
        onPress={() => {
          fadeIn();
          startMovingPosition(-100);
        }}
        title="Fade In"
      />
      <Button onPress={() => fadeOut()} title="Fade Out" />
    </View>
  );
};
const internalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    width: 150,
    height: 150,
  },
});

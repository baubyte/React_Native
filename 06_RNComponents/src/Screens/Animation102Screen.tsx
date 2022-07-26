import React, {useRef} from 'react';
import {Animated, PanResponder, StyleSheet, View} from 'react-native';

export const Animation102Screen = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {
      useNativeDriver: false,
    }),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        {toValue: {x: 0, y: 0}, useNativeDriver: false}, // Back to zero
      ).start();
    },
  });

  return (
    <View style={internalStyles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), internalStyles.box]}
      />
    </View>
  );
};
const internalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#75CEDE',
    width: 150,
    height: 150,
    borderRadius: 4,
  },
});

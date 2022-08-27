import React, {useContext} from 'react';
import {Animated, Button, StyleSheet, View} from 'react-native';
import {ThemeContext} from '../Context/themeContext/ThemeContext';
import {useAnimation} from '../Hooks/useAnimation';

export const Animation101Screen = () => {
  const {fadeIn, fadeOut, opacity, position, startMovingPosition} =
    useAnimation();
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={internalStyles.container}>
      <Animated.View
        style={{
          ...internalStyles.purpleBox,
          backgroundColor: colors.primary,
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
        color={colors.primary}
      />
      <Button
        onPress={() => fadeOut()}
        title="Fade Out"
        color={colors.primary}
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
  purpleBox: {
    width: 150,
    height: 150,
  },
});

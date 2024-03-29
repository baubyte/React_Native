import React, {useContext, useEffect} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {GradientContext} from '../Context/GradientContext';
import { useFade } from '../Hooks/useFade';
interface Props {
  children: JSX.Element | JSX.Element[];
}

export const GradientBackground = ({children}: Props) => {
  const {colors, previousColors, setMainPreviousColors} = useContext(GradientContext);
  const {opacity, fadeIn, fadeOut} = useFade();
  useEffect(() => {
    fadeIn(() => {
      setMainPreviousColors(colors);
      fadeOut(0);
    });
  }, [colors]);
  
  return (
    <View style={gradientBackgroundStyles.container}>
      <LinearGradient
        colors={[
          previousColors.primaryColor,
          previousColors.secondaryColor,
          'white',
        ]}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.5, y: 0.7}}
      />
      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          opacity,
        }}>
        <LinearGradient
          colors={[colors.primaryColor, colors.secondaryColor, 'white']}
          style={{...StyleSheet.absoluteFillObject}}
          start={{x: 0.1, y: 0.1}}
          end={{x: 0.5, y: 0.7}}
        />
      </Animated.View>
      {children}
    </View>
  );
};
const gradientBackgroundStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
  },
});

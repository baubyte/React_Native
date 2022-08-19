import React, {useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  ImageStyle,
  StyleProp,
  StyleSheet,
  View,
} from 'react-native';
import {useAnimation} from '../Hooks/useAnimation';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}
export const FadeInImage = ({uri, style}: Props) => {
  const {opacity, fadeIn} = useAnimation();
  const [isLoading, setIsLoading] = useState(true);
  /**
   *
   */
  const finishLoading = () => {
    setIsLoading(false);
    fadeIn();
  };
  return (
    <View style={internalStyles.container}>
      {isLoading && (
        <ActivityIndicator
          size={25}
          color="#5856D6"
          style={internalStyles.activityIndicator}
        />
      )}
      <Animated.Image
        onLoadEnd={finishLoading}
        source={{uri}}
        style={{
          ...(style as any),
          //width: '100%',
          //height: 400,
          opacity,
        }}
      />
    </View>
  );
};
const internalStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityIndicator: {
    position: 'absolute',
  },
});

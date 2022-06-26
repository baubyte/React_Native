import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {useMovies} from '../Hooks/useMovies';
import {styles} from '../Theme/appTheme';

export const HomeScreen = () => {
  const {moviesInCinema, isLoading} = useMovies();
  if (isLoading) {
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }
  console.log(moviesInCinema[3]?.title);

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

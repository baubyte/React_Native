import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import {MoviePoster} from '../Components/MoviePoster';
import {useMovies} from '../Hooks/useMovies';
import {styles} from '../Theme/appTheme';

export const HomeScreen = () => {
  const {moviesInCinema, isLoading} = useMovies();
  const {top: marginTop} = useSafeAreaInsets();
  
  if (isLoading) {
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }
  return (
    <View style={{marginTop: marginTop + 20}}>
      {/* <MoviePoster movie={moviesInCinema[2]} /> */}
      <Carousel
        data={moviesInCinema}
        renderItem={() => <MoviePoster movie={moviesInCinema[2]} />}
        sliderWidth={350}
        itemWidth={300}
      />
    </View>
  );
};

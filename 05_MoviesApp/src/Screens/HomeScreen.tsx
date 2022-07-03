import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import {MoviePoster} from '../Components/MoviePoster';
import {useMovies} from '../Hooks/useMovies';
import {styles} from '../Theme/appTheme';

export const HomeScreen = () => {
  const {moviesInCinema, isLoading} = useMovies();
  const {top: marginTop} = useSafeAreaInsets();
  const {width: windowWidth} = Dimensions.get('window');
  if (isLoading) {
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }
  return (
    <ScrollView>
      <View style={{marginTop: marginTop + 20}}>
        {/* Carrusel películas en cine */}
        <View style={styles.carouselContainer}>
          <Carousel
            data={moviesInCinema}
            renderItem={({item}: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
          />
        </View>
        {/* Películas Populares */}
        <View style={styles.flatListContainer}>
          <Text style={styles.titleMoviesPopular}>Populares</Text>
          <FlatList
            data={moviesInCinema}
            renderItem={({item}: any) => (
              <MoviePoster movie={item} width={140} height={200} />
            )}
            keyExtractor={item => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </ScrollView>
  );
};
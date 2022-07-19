import React, {useContext, useEffect} from 'react';
import {ActivityIndicator, Dimensions, ScrollView, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import {GradientBackground} from '../Components/GradientBackground';
import {HorizontalSlider} from '../Components/HorizontalSlider';
import {MoviePoster} from '../Components/MoviePoster';
import {useMovies} from '../Hooks/useMovies';
import {styles} from '../Theme/appTheme';
import {getImageColors} from '../Helpers/getColors';
import {GradientContext} from '../Context/GradientContext';

export const HomeScreen = () => {
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
  const {top: marginTop} = useSafeAreaInsets();
  const {setMainColors} = useContext(GradientContext);

  const {width: windowWidth} = Dimensions.get('window');
  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const [primaryColor = 'green', secondaryColor = 'orange'] =
      await getImageColors(uri);
    setMainColors({primaryColor, secondaryColor});
  };
  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColors(0);
    }
  }, [nowPlaying]);

  if (isLoading) {
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }
  return (
    <GradientBackground>
      <ScrollView>
        <View style={{marginTop: marginTop + 20}}>
          {/* Carrusel películas en cine */}
          <View style={styles.carouselContainer}>
            <Carousel
              data={nowPlaying}
              renderItem={({item}: any) => <MoviePoster movie={item} />}
              sliderWidth={windowWidth}
              itemWidth={300}
              inactiveSlideOpacity={0.7}
              onBeforeSnapToItem={index => getPosterColors(index)}
            />
          </View>
          {/* Películas Populares */}
          <HorizontalSlider title="Populares" movies={popular} />
          {/* Películas Mejor Calificadas" */}
          <HorizontalSlider title="Mejor Calificadas" movies={topRated} />
          {/* Películas Próximamente" */}
          <HorizontalSlider title="Próximamente" movies={upcoming} />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};

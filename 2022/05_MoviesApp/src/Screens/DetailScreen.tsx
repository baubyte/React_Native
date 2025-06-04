import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RootStackParams} from '../Navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import {useMovieDetails} from '../Hooks/useMovieDetails';
import {styles} from '../Theme/appTheme';
import {MovieDetails} from '../Components/MovieDetails';

const screenHeight = Dimensions.get('screen').height;
interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

export const DetailScreen = ({route, navigation}: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
  const {isLoading, cast, movieFull} = useMovieDetails(movie.id);
  return (
    <ScrollView>
      <View style={detailStyles.imageContainer}>
        <View style={detailStyles.imageBorder}>
          <Image source={{uri}} style={detailStyles.image} />
        </View>
      </View>
      <View style={detailStyles.marginContainer}>
        <Text style={detailStyles.subTitle}>{movie.original_title}</Text>
        <Text style={detailStyles.title}>{movie.title}</Text>
      </View>
      {isLoading ? (
        <ActivityIndicator
          size={35}
          color="red"
          style={styles.activityIndicator}
        />
      ) : (
        <MovieDetails movieFull={movieFull!} cast={cast} />
      )}

      {/* Botón para volver */}
      <View style={detailStyles.backButton}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Icon color="white" name="arrow-back-outline" size={60} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const detailStyles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 10,
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  image: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 30,
    left: 5,
  },
});

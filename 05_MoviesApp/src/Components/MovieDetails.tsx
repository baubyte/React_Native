import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import currencyFormatter from 'currency-formatter';
import Icon from 'react-native-vector-icons/Ionicons';
import {Cast} from '../Interfaces/creditsInterface';
import {MovieFull} from '../Interfaces/movieInterface';
import {CastItem} from './CastItem';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}
export const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
      {/* Detalles */}
      <View style={movieDetailsStyles.marginContainer}>
        <View style={movieDetailsStyles.ratingGenresContainer}>
          <Icon name="star-outline" color="grey" size={16} />
          <Text> {movieFull.vote_average}</Text>
          <Text style={movieDetailsStyles.genres}>
            - {movieFull.genres.map(gender => gender.name).join(', ')}
          </Text>
        </View>
        {/* Historia */}
        <Text style={movieDetailsStyles.titleDetails}>Historia</Text>
        <Text style={movieDetailsStyles.history}>{movieFull!.overview}</Text>
        {/* Presupuesto */}
        <Text style={movieDetailsStyles.titleDetails}>Presupuesto</Text>
        <Text style={movieDetailsStyles.budget}>
          {currencyFormatter.format(movieFull!.budget, {
            locale: 'es-AR',
            code: 'USD',
            format: '%s %v',
          })}
        </Text>
      </View>
      {/* Casting */}
      <View style={movieDetailsStyles.castContainer}>
        <Text style={movieDetailsStyles.titleActors}>Actores</Text>
        <FlatList
          data={cast}
          keyExtractor={(item, index) => item.id.toString() + index}
          renderItem={({item}) => <CastItem actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={movieDetailsStyles.listActors}
        />
      </View>
    </>
  );
};
const movieDetailsStyles = StyleSheet.create({
  marginContainer: {
    marginHorizontal: 20,
  },
  ratingGenresContainer: {
    flexDirection: 'row',
  },
  genres: {
    marginLeft: 5,
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  titleDetails: {
    fontSize: 23,
    marginTop: 10,
    fontWeight: 'bold',
  },
  history: {fontSize: 16},
  budget: {fontSize: 18},
  castContainer: {
    marginTop: 10,
    marginBottom: 100,
  },
  titleActors: {
    fontSize: 23,
    marginTop: 10,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  listActors: {
    marginTop: 10,
    height: 70,
  },
});

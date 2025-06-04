import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {Movie} from '../Interfaces/movieInterface';
import {styles} from '../Theme/appTheme';
import {MoviePoster} from './MoviePoster';

interface Props {
  title?: string;
  movies: Movie[];
}
export const HorizontalSlider = ({title, movies}: Props) => {
  return (
    <View
      style={{
        ...styles.flatListContainer,
        height: title && 260,
      }}>
      {title && <Text style={styles.titleFlatList}>{title}</Text>}
      <FlatList
        data={movies}
        renderItem={({item}: any) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

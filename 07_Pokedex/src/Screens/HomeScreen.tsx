import React from 'react';
import {ActivityIndicator, FlatList, Image, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FadeInImage} from '../Components/FadeInImage';
import {usePokemonPaginated} from '../Hooks/usePokemonPaginated';
import {styles} from '../Theme/appTheme';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {simplePokemonList, loadPokemons} = usePokemonPaginated();
  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokeBallBackground}
      />
      <FlatList
        data={simplePokemonList}
        keyExtractor={pokemon => pokemon.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <FadeInImage uri={item.picture} style={styles.pokemonImage} />
        )}
        //Infinite scroll
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.4}
        ListFooterComponent={
          <ActivityIndicator
            style={styles.listFooterActivityIndicator}
            size={20}
            color="grey"
          />
        }
      />
      {/* <Text style={{...styles.title, ...styles.globalMargin, top: top + 20}}>
        Pokedex
      </Text> */}
    </>
  );
};

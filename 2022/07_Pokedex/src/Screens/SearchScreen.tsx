import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Loading} from '../Components/Loading';
import {PokemonCard} from '../Components/PokemonCard';
import {SearchInput} from '../Components/SearchInput';
import {usePokemonSearch} from '../Hooks/usePokemonSearch';
import {SimplePokemon} from '../Interfaces/pokemonInterfaces';
import {styles} from '../Theme/appTheme';

const screenWidth = Dimensions.get('window').width;

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isFetching, simplePokemonList} = usePokemonSearch();
  const [term, setTerm] = useState('');
  const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([]);

  useEffect(() => {
    if (term.length === 0) {
      //Vaciamos la lista
      return setPokemonFiltered([]);
    }
    if (isNaN(Number(term))) {
      //Aplicar filtro por nombre
      setPokemonFiltered(
        simplePokemonList.filter(pokemon =>
          pokemon.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()),
        ),
      );
    } else {
      const pokemonById = simplePokemonList.find(
        pokemon => pokemon.id === term,
      );
      setPokemonFiltered(pokemonById ? [pokemonById] : []);
    }
  }, [term]);

  if (isFetching) {
    return <Loading />;
  }
  return (
    <View style={internalStyles.container}>
      <SearchInput
        onDebounce={value => setTerm(value)}
        style={{
          ...internalStyles.searchInput,
          top: Platform.OS === 'ios' ? top : top + 20,
        }}
      />
      <FlatList
        data={pokemonFiltered}
        keyExtractor={pokemon => pokemon.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        //Header
        ListHeaderComponent={
          <Text
            style={{
              ...styles.title,
              ...styles.globalMargin,
              marginTop: Platform.OS === 'ios' ? top + 60 : top + 60,
            }}>
            {term}
          </Text>
        }
        renderItem={({item}) => <PokemonCard pokemon={item} />}
      />
    </View>
  );
};
const internalStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  searchInput: {
    position: 'absolute',
    zIndex: 999,
    width: screenWidth - 32,
  },
});

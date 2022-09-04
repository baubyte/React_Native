import React from 'react';
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
import {styles} from '../Theme/appTheme';

const screenWidth = Dimensions.get('window').width;

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isFetching, simplePokemonList} = usePokemonSearch();

  if (isFetching) {
    return <Loading />;
  }
  return (
    <View style={internalStyles.container}>
      <SearchInput
        style={{
          ...internalStyles.searchInput,
          top: Platform.OS === 'ios' ? top : top + 20,
        }}
      />
      <FlatList
        data={simplePokemonList}
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
            Pokedex
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

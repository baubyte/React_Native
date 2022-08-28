import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SimplePokemon} from '../Interfaces/pokemonInterfaces';
import {FadeInImage} from './FadeInImage';

const windowWidth = Dimensions.get('window').width;
interface Props {
  pokemon: SimplePokemon;
}
export const PokemonCard = ({pokemon}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View
        style={{
          ...internalStyles.cardContainer,
          width: windowWidth * 0.4,
        }}>
        {/* Nombre de Pokemon */}
        <View>
          <Text style={internalStyles.name}>
            {pokemon.name}
            {`\n#${pokemon.id}`}
          </Text>
        </View>
        <View style={internalStyles.pokeballContainer}>
          <Image
            source={require('../assets/pokebola-blanca.png')}
            style={internalStyles.pokeball}
          />
        </View>
        <FadeInImage
          uri={pokemon.picture}
          style={internalStyles.pokemonImage}
        />
      </View>
    </TouchableOpacity>
  );
};
const internalStyles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    backgroundColor: 'red',
    height: 120,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    top: 10,
    left: 10,
  },
  pokeball: {
    width: 100,
    height: 100,
    position: 'absolute',
    right: -25,
    bottom: -25,
  },
  pokemonImage: {
    width: 120,
    height: 120,
    position: 'absolute',
    bottom: -8,
    right: -5,
  },
  pokeballContainer: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 0,
    right: -0,
    overflow: 'hidden',
    opacity: 0.5,
  },
});

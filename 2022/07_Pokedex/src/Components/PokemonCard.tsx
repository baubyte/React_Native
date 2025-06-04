import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ImageColors from 'react-native-image-colors';
import {SimplePokemon} from '../Interfaces/pokemonInterfaces';
import {FadeInImage} from './FadeInImage';

const windowWidth = Dimensions.get('window').width;
interface Props {
  pokemon: SimplePokemon;
}
export const PokemonCard = ({pokemon}: Props) => {
  const [bgColor, setBgColor] = useState('grey');
  const isMounted = useRef(true);
  const navigation = useNavigation();
  useEffect(() => {
    const getImageColors = async () => {
      try {
        const colors = await ImageColors.getColors(pokemon.picture, {
          fallback: 'grey',
        });
        //si esta desmontado no hacemos el cambio de color
        if (!isMounted.current) {
          return;
        }
        switch (colors.platform) {
          case 'android':
            setBgColor(colors.dominant || 'grey');
            break;
          case 'ios':
            setBgColor(colors.background || 'grey');
            break;
        }
      } catch (error) {
        console.log(error);
      }
      //Cuando se desmonta el componente se dispara
      return () => {
        return (isMounted.current = false);
      };
    };
    getImageColors();
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() =>
        navigation.navigate('PokemonScreen', {
          simplePokemon: pokemon,
          color: bgColor,
        })
      }>
      <View
        style={{
          ...internalStyles.cardContainer,
          width: windowWidth * 0.4,
          backgroundColor: bgColor,
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
    textTransform: 'capitalize',
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

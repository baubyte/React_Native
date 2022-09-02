import React from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {RootStackParams} from '../Navigation/Types';
import {FadeInImage} from '../Components/FadeInImage';
import {usePokemon} from '../Hooks/usePokemon';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

export const PokemonScreen = ({navigation, route}: Props) => {
  const {simplePokemon, color} = route.params;
  const {id, name, picture} = simplePokemon;
  const {top} = useSafeAreaInsets();
  const {isLoading, pokemon} = usePokemon(id);
  return (
    <View style={internalStyles.container}>
      {/* Header Container */}
      <View style={{...internalStyles.headerContainer, backgroundColor: color}}>
        {/* Back Button */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={{...internalStyles.backButton, top: top + 5}}
          onPress={() => navigation.pop()}>
          <Icon name="arrow-back-outline" color="white" size={36} />
        </TouchableOpacity>
        {/* Nombre Pokemon */}
        <Text style={{...internalStyles.pokemonName, top: top + 40}}>
          {name}
          {`\n#${id}`}
        </Text>
        {/* Pokeball Blanca */}
        <Image
          source={require('../assets/pokebola-blanca.png')}
          style={internalStyles.pokeball}
        />
        <FadeInImage uri={picture} style={internalStyles.pokemonImage} />
      </View>
      {/* Detalle y Loading */}
      <View style={internalStyles.activityIndicator}>
        <ActivityIndicator color={color} size={50} />
      </View>
    </View>
  );
};
const internalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: 370,
    zIndex: 999,
    alignItems: 'center',
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,
  },
  backButton: {
    position: 'absolute',
    left: 20,
  },
  pokemonName: {
    color: 'white',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20,
  },
  pokeball: {
    width: 250,
    height: 250,
    bottom: -20,
    opacity: 0.7,
  },
  pokemonImage: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -15,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

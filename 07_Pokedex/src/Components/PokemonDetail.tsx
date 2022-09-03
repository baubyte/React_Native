/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {PokemonFull} from '../Interfaces/pokemonInterfaces';
import {FadeInImage} from './FadeInImage';

interface Props {
  pokemon: PokemonFull;
}

export const PokemonDetail = ({pokemon}: Props) => {
  return (
    <ScrollView
      style={{...StyleSheet.absoluteFillObject}}
      showsVerticalScrollIndicator={false}>
      <View style={{...internalStyles.container, marginTop: 360}}>
        <Text style={internalStyles.title}>Tipos</Text>
        {/* Types y peso*/}
        <View style={{...internalStyles.typeContainer}}>
          {pokemon.types.map(({type}) => {
            return (
              <Text
                style={{...internalStyles.regularText, marginRight: 10}}
                key={type.name}>
                {type.name}
              </Text>
            );
          })}
        </View>
        {/* Peso */}
        <Text style={internalStyles.title}>Peso</Text>
        <Text style={internalStyles.regularText}>{pokemon.weight} Kg.</Text>
      </View>
      {/* Sprites */}
      <View style={internalStyles.container}>
        <Text style={internalStyles.title}>Sprites</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FadeInImage
          style={internalStyles.basicSprites}
          uri={pokemon.sprites.front_default}
        />
        <FadeInImage
          style={internalStyles.basicSprites}
          uri={pokemon.sprites.back_default}
        />
        <FadeInImage
          style={internalStyles.basicSprites}
          uri={pokemon.sprites.front_shiny}
        />
        <FadeInImage
          style={internalStyles.basicSprites}
          uri={pokemon.sprites.back_shiny}
        />
      </ScrollView>
      {/* Habilidades */}
      <View style={internalStyles.container}>
        <Text style={internalStyles.title}>Habilidades Base</Text>
        <View style={{...internalStyles.typeContainer}}>
          {pokemon.abilities.map(({ability}) => {
            return (
              <Text
                style={{...internalStyles.regularText, marginRight: 10}}
                key={ability.name}>
                {ability.name}
              </Text>
            );
          })}
        </View>
      </View>
      {/* Movimientos */}
      <View style={internalStyles.container}>
        <Text style={internalStyles.title}>Movimientos</Text>
        <View style={{...internalStyles.typeContainer, flexWrap: 'wrap'}}>
          {pokemon.moves.map(({move}) => {
            return (
              <Text
                style={{...internalStyles.regularText, marginRight: 10}}
                key={move.name}>
                {move.name}
              </Text>
            );
          })}
        </View>
      </View>
      {/* Stats */}
      <View style={internalStyles.container}>
        <Text style={internalStyles.title}>Estados Iniciales </Text>
        <View>
          {pokemon.stats.map((stat, index) => {
            return (
              <View
                key={stat.stat.name + '-' + index}
                style={internalStyles.typeContainer}>
                <Text
                  style={{
                    ...internalStyles.regularText,
                    marginRight: 10,
                    width: 150,
                  }}>
                  {stat.stat.name}
                </Text>
                <Text
                  style={{
                    ...internalStyles.regularText,
                    fontWeight: 'bold',
                  }}>
                  {stat.base_stat}
                </Text>
              </View>
            );
          })}
        </View>

        {/* Sprite final */}
        <View style={internalStyles.finalSprite}>
          <FadeInImage
            uri={pokemon.sprites.front_default}
            style={internalStyles.basicSprites}
          />
        </View>
      </View>
    </ScrollView>
  );
};
const internalStyles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 20,
  },
  typeContainer: {
    flexDirection: 'row',
  },
  regularText: {
    fontSize: 18,
    color: 'black',
  },
  basicSprites: {
    width: 100,
    height: 100,
  },
  finalSprite: {
    marginBottom: 20,
    alignItems: 'center',
  },
});

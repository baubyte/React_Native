import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Cast} from '../Interfaces/creditsInterface';

interface Props {
  actor: Cast;
}

export const CastItem = ({actor}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
  return (
    <View style={styles.container}>
      {actor.profile_path && <Image source={{uri}} style={styles.actorImage} />}

      <View style={styles.actorInfoContainer}>
        <Text style={styles.actorName}>{actor.name}</Text>
        <Text style={styles.actorCharacter}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 5,
    marginLeft: 20,
    paddingRight: 15,
  },
  actorImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  actorInfoContainer: {
    marginLeft: 10,
    marginTop: 4,
  },
  actorName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  actorCharacter: {
    fontSize: 16,
    opacity: 0.7,
  },
});

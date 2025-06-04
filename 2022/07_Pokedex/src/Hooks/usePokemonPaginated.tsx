import {useEffect, useRef, useState} from 'react';
import {pokemonApi} from '../Api/pokemonApi';
import {
  PokemonPaginatedResponse,
  Result,
  SimplePokemon,
} from '../Interfaces/pokemonInterfaces';

export const usePokemonPaginated = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>(
    [],
  );
  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon/?limit=40');
  /**
   * Obtiene los Pokemons
   */
  const loadPokemons = async () => {
    setIsLoading(true);
    const response = await pokemonApi.get<PokemonPaginatedResponse>(
      nextPageUrl.current,
    );
    nextPageUrl.current = response.data.next;
    mapPokemonList(response.data.results);
  };
  /**
   * Convierte el result a un tipo SimplePokemon
   * @param pokemonList
   */
  const mapPokemonList = (pokemonList: Result[]) => {
    const newPokemonList: SimplePokemon[] = pokemonList.map(({name, url}) => {
      const urlParts = url.split('/');
      const id = urlParts[urlParts.length - 2];
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
      return {id, picture, name};
    });
    setSimplePokemonList([...simplePokemonList, ...newPokemonList]);
    setIsLoading(false);
  };
  useEffect(() => {
    loadPokemons();
  }, []);
  return {simplePokemonList, isLoading, loadPokemons};
};

import {SimplePokemon} from '../Interfaces/pokemonInterfaces';

export type RootStackParams = {
  HomeScreen: undefined;
  PokemonScreen: {simplePokemon: SimplePokemon; color: string};
  SearchScreen: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParams {}
  }
}

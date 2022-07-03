import {useEffect, useState} from 'react';
import movieDB from '../Api/movieDB';
import {MovieDBMoviesResponse, Movie} from '../Interfaces/movieInterface';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  //Inicializamos vacíos para que siempre se retorne algo
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });
  /**
   * Obtiene las películas en cine
   */
  const getMovies = async () => {
    try {
      //Guarda el response Peliculas en cine
      const nowPlayingPromise =
        movieDB.get<MovieDBMoviesResponse>('/now_playing');
      //Guarda el response Peliculas en cine
      const popularPromise = movieDB.get<MovieDBMoviesResponse>('/popular');
      //Guarda el response Peliculas Mejor Valoradas
      const topRatedPromise = movieDB.get<MovieDBMoviesResponse>('/top_rated');
      //Guarda el response Peliculas Próximas a estrenar
      const upcomingPromise = movieDB.get<MovieDBMoviesResponse>('/upcoming');

      const responses = await Promise.all([
        nowPlayingPromise,
        popularPromise,
        topRatedPromise,
        upcomingPromise,
      ]);
      //Estableamos las películas
      setMoviesState({
        nowPlaying: responses[0].data.results,
        popular: responses[1].data.results,
        topRated: responses[2].data.results,
        upcoming: responses[3].data.results,
      });

      //Estableamos el loading en false
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    //Obtenemos la películas en cine
    getMovies();
  }, []);
  return {
    ...moviesState,
    isLoading,
  };
};

import {useEffect, useState} from 'react';
import movieDB from '../Api/movieDB';
import {MovieDBNowPlaying, Movie} from '../Interfaces/movieInterface';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesInCinema, setMoviesInCinema] = useState<Movie[]>([]);
  /**
   * Obtiene las películas en cine
   */
  const getMovies = async () => {
    try {
      //Guarda el response
      const response = await movieDB.get<MovieDBNowPlaying>('/now_playing');
      //Estableamos las películas en el estado
      setMoviesInCinema(response.data.results);
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
    moviesInCinema,
    isLoading,
  };
};

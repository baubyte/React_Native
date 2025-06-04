import {useEffect, useState} from 'react';
import movieDB from '../Api/movieDB';
import {MovieDBMoviesResponse, Movie} from '../Interfaces/movieInterface';

interface SimilarMoviesState {
  isLoading: boolean;
  similarMovies: Movie[];
}

export const useSimilarMovies = (movieId: number) => {
  const [state, setState] = useState<SimilarMoviesState>({
    isLoading: true,
    similarMovies: [],
  });

  /**
   * Obtiene las Peliculas similares
   */
  const getSimilarMovies = async () => {
    const similarMoviesResponse = await movieDB.get<MovieDBMoviesResponse>(
      `/${movieId}/similar`,
    );
    setState({
      isLoading: false,
      similarMovies: similarMoviesResponse.data.results,
    });
  };
  useEffect(() => {
    //Obtenemos las Peliculas similares
    getSimilarMovies();
  }, []);

  return {
    ...state,
  };
};

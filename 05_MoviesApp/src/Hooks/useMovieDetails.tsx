import {useEffect, useState} from 'react';
import movieDB from '../Api/movieDB';
import {Cast, CreditsResponse} from '../Interfaces/creditsInterfice';
import {MovieFull} from '../Interfaces/movieInterface';

interface MovieDetails {
  isLoading: boolean;
  movieFull?: MovieFull;
  cast: Cast[];
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  /**
   * Obtiene el detalle de la película
   */
  const getMovieDetails = async () => {
    const movieDetailsPromise = movieDB.get<MovieFull>(`/${movieId}`);
    const castPromise = movieDB.get<CreditsResponse>(`/${movieId}/credits`);
    const [movieDetailsResponse, castResponse] = await Promise.all([
      movieDetailsPromise,
      castPromise,
    ]);
    setState({
      isLoading: false,
      movieFull: movieDetailsResponse.data,
      cast: castResponse.data.cast,
    });
  };
  useEffect(() => {
    //Obtenemos el detalle de la película
    getMovieDetails();
  }, []);

  return {
    ...state,
  };
};

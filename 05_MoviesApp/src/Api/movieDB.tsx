import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '47685cb51819b567756e7be28465581b',
    language: 'es-ES',
  },
});

export default movieDB;

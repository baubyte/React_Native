import {useEffect, useState} from 'react';
import cafeApi from '../Api/cafeApi';
import {Categoria, CategoriesResponse} from '../Interfaces/appInterfaces';

export const useCategories = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState<Categoria[]>([]);
  useEffect(() => {
    getCategories();
  }, []);
  const getCategories = async () => {
    const response = await cafeApi.get<CategoriesResponse>('/categorias');
    setCategories(response.data.categorias);
    setIsLoading(false);
  };
  return {isLoading, categories};
};

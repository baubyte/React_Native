import React, {createContext, useEffect, useState} from 'react';
import cafeApi from '../../Api/cafeApi';
import {
  ChildrenComponent,
  Producto,
  ProductsResponse,
} from '../../Interfaces/appInterfaces';

type ProductContextProps = {
  products: Producto[];
  loadProducts: () => Promise<void>;
  addProduct: (categoryId: string, productName: string) => Promise<Producto>;
  updateProduct: (
    categoryId: string,
    productName: string,
    productId: string,
  ) => Promise<void>;
  deleteProduct: (productId: string) => Promise<void>;
  loadProductById: (productId: string) => Promise<Producto>;
  uploadImage: (data: any, productId: string) => Promise<void>; // TODO Cambiar el ANY
};

export const ProductContext = createContext({} as ProductContextProps);

export const ProductProvider = ({children}: ChildrenComponent) => {
  // TODO Implementar un reducer
  const [products, setProducts] = useState<Producto[]>([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const response = await cafeApi.get<ProductsResponse>('productos?limite=50');
    setProducts([...response.data.productos]);
  };
  const addProduct = async (
    categoryId: string,
    productName: string,
  ): Promise<Producto> => {
    const response = await cafeApi.post<Producto>('/productos', {
      nombre: productName,
      categoria: categoryId,
    });
    setProducts([...products, response.data]);
    return response.data;
  };
  const updateProduct = async (
    categoryId: string,
    productName: string,
    productId: string,
  ) => {
    try {
      const response = await cafeApi.put<Producto>(`/productos/${productId}`, {
        nombre: productName,
        categoria: categoryId,
      });
      setProducts(
        products.map(product =>
          product._id === productId ? response.data : product,
        ),
      );
    } catch (error) {
      console.log(error);
    }
  };
  const deleteProduct = async (productId: string) => {};
  const loadProductById = async (productId: string): Promise<Producto> => {
    const response = await cafeApi.get<Producto>(`productos/${productId}`);
    return response.data;
  };
  const uploadImage = async (data: any, productId: string) => {};
  return (
    <ProductContext.Provider
      value={{
        products,
        loadProducts,
        addProduct,
        updateProduct,
        deleteProduct,
        loadProductById,
        uploadImage,
      }}>
      {children}
    </ProductContext.Provider>
  );
};

import React, { createContext, useReducer, useEffect } from 'react';
import { fetchingReducer } from '../reducers/fetchingReducer';
import axios from 'axios';

export const ProductsContext = createContext();

const initialState = {
  loading: true,
  error: '',
  post: {},
};

const ProductsContextProvider = ({ children }) => {
  const [products, dispatchProducts] = useReducer(
    fetchingReducer,
    initialState
  );

  useEffect(() => {
    axios
      .get('https://products-api-01.herokuapp.com/api/products')
      .then((res) => {
        dispatchProducts({ type: 'FETCH_SUCCESS', payload: res.data });
      })
      .catch((err) => {
        dispatchProducts({ type: 'FETCH_ERROR' });
      });
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;

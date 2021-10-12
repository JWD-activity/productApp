import React, { createContext, useReducer, useEffect } from 'react';
import { fetchingReducer } from '../reducers/fetchingReducer';
import axios from 'axios';

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [state, dispatchProducts] = useReducer(fetchingReducer, {
    loading: true,
    error: '',
    post: [],
  });

  useEffect(() => {
    axios
      .get('https://products-api-01.herokuapp.com/api/products')
      .then((res) => {
        dispatchProducts({ type: 'FETCH_SUCCESS', payload: res.data });
      })
      .catch((err) => {
        dispatchProducts({ type: 'FETCH_ERROR' });
      });
  }, [state.loading]);

  console.log('sate: ', state);

  return (
    <ProductsContext.Provider value={{ state }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;

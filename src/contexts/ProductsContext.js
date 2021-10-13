import React, { createContext, useReducer, useEffect } from 'react';
import { fetchingReducer } from '../reducers/fetchingReducer';
import axios from 'axios';
import { URL, INIT_STATE } from '../utils/constants';

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [state, dispatchProducts] = useReducer(fetchingReducer, INIT_STATE);

  useEffect(() => {
    axios
      .get(`${URL}`)
      .then((res) => {
        dispatchProducts({ type: 'FETCH_SUCCESS', payload: res.data });
      })
      .catch((err) => {
        dispatchProducts({ type: 'FETCH_ERROR' });
      });
  }, []);

  return (
    <ProductsContext.Provider value={{ state }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;

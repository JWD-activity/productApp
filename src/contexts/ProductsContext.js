import React, { createContext, useReducer, useEffect, useState } from 'react';
import { fetchingReducer } from '../reducers/fetchingReducer';
import axios from 'axios';
import { URL, INIT_STATE } from '../utils/constants';

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [state, dispatchProducts] = useReducer(fetchingReducer, INIT_STATE);
  const [search, setSearch] = useState('');
  const [sorting, setSorting] = useState('');

  const setSort = (userInput) => {
    setSorting(userInput);
  };

  const setSearchTerm = (userInput) => {
    setSearch(userInput);
  };

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
    <ProductsContext.Provider
      value={{ state, search, setSearchTerm, sorting, setSort }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;

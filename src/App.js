import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from '@mui/material';
import theme from './assets/style/theme';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import Details from './components/Pages/Details';
import ProductsContextProvider from './contexts/ProductsContext';
import SearchTermContextProvider from './contexts/SearchTermContext';

function App() {
  console.log('render App');
  return (
    <ThemeProvider theme={theme}>
      <ProductsContextProvider>
        <SearchTermContextProvider>
          <Navbar />
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/product/:id'>
            <Details />
          </Route>
        </SearchTermContextProvider>
      </ProductsContextProvider>
    </ThemeProvider>
  );
}

export default App;

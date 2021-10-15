import React from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import theme from './assets/style/theme';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import Details from './components/Pages/Details';
import Footer from './components/Footer/Footer';
import ProductsContextProvider from './contexts/ProductsContext';

function App() {
  console.log('render App');
  return (
    <ThemeProvider theme={theme}>
      <ProductsContextProvider>
        <Navbar />
        <Route exact path='/productApp'>
          <Home />
        </Route>
        <Route path='/productApp/product/:id'>
          <Details />
        </Route>
        <Footer />
      </ProductsContextProvider>
    </ThemeProvider>
  );
}

export default App;

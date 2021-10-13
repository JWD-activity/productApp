import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import Details from './components/Pages/Details';
import ProductsContextProvider from './contexts/ProductsContext';

function App() {
  console.log('render App');
  return (
    <>
      <Navbar />
      <ProductsContextProvider>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/product/:id'>
          <Details />
        </Route>
      </ProductsContextProvider>
    </>
  );
}

export default App;

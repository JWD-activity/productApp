import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import Details from './components/Pages/Details';
import Message from './components/Pages/Message';
import ProductsContextProvider from './contexts/ProductsContext';
import { Layout } from 'antd';

const { Footer, Content } = Layout;

function App() {
  console.log('render App');
  return (
    <>
      <Navbar />
      <ProductsContextProvider>
        <Content>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/product/:id'>
            <Details />
          </Route>
        </Content>
      </ProductsContextProvider>
      <Footer></Footer>
    </>
  );
}

export default App;

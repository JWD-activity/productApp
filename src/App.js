import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/Pages/ProductList';
import ProductsContextProvider from './contexts/ProductsContext';
import { Layout } from 'antd';
const { Footer, Content } = Layout;

function App() {
  return (
    <>
      <Navbar />
      <ProductsContextProvider>
        <Content style={{ padding: '8rem 3rem' }}>
          <ProductList />
        </Content>
      </ProductsContextProvider>
      <Footer>Footer</Footer>
    </>
  );
}

export default App;

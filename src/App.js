import React, { useContext } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Navbar from './components/Navbar/Navbar';
import ProductCard from './components/ProductCard/ProductCard';
import ProductsContextProvider from './contexts/ProductsContext';
import { Layout } from 'antd';
const { Footer, Content } = Layout;

function App() {
  return (
    <>
      <Navbar />
      <ProductsContextProvider>
        <Content style={{ padding: '6rem 3rem' }}>
          <ProductCard />
        </Content>
      </ProductsContextProvider>
      <Footer>Footer</Footer>
    </>
  );
}

export default App;

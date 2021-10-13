import React, { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';
import ProductCard from '../ProductCard/ProductCard';
import Container from '@mui/material/Container';

function ProductList() {
  const { state } = useContext(ProductsContext);
  console.log('render productList');
  console.log(state.loading);
  return (
    <Container>
      {state.loading ? (
        <div>Loding...</div>
      ) : (
        <div>
          {state.post.map((product) => (
            <ProductCard
              key={product._id}
              id={product._id}
              imgUrl={product.imgURL}
              name={product.name}
              price={product.price}
              loading={state.loading}
            ></ProductCard>
          ))}
        </div>
      )}
    </Container>
  );
}

export default ProductList;

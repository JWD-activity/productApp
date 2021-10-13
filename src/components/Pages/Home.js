import React, { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';
import ProductCard from '../ProductCard/ProductCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

function ProductList() {
  const { state } = useContext(ProductsContext);
  console.log('render productList');
  console.log(state.loading);
  return (
    <Container component='main'>
      {state.loading ? (
        <CircularProgress color='secondary' />
      ) : (
        <Grid container spacing={{ xs: 6, sm: 8, lg: 10 }} columns={12}>
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
        </Grid>
      )}
    </Container>
  );
}

export default ProductList;

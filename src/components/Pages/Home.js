import React, { useContext, useState } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';
import { SearchTermContext } from '../../contexts/SearchTermContext';
import ProductCard from '../ProductCard/ProductCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

function ProductList() {
  const { state } = useContext(ProductsContext);
  const { search } = useContext(SearchTermContext);
  const { post, loading } = state;
  const [searchParam] = useState(['name']);

  console.log('render productList');

  const searchProduct = (userInput) => {
    return post.filter((product) => {
      if (userInput) {
        return searchParam.some((newProduct) => {
          return (
            product[newProduct]
              .toString()
              .toLowerCase()
              .indexOf(userInput.toLowerCase()) > -1
          );
        });
        // .toLowerCase()
        // .includes(userInput.toLowerCase());
      }
      return product;
    });
  };

  return (
    <Container component='main'>
      {loading ? (
        <Grid container sx={{ justifyContent: 'center' }}>
          <CircularProgress color='secondary' />
        </Grid>
      ) : (
        <Grid container spacing={{ xs: 6, sm: 8, lg: 10 }} columns={12}>
          {searchProduct(search).map((product) => (
            <ProductCard
              key={product._id}
              id={product._id}
              imgUrl={product.imgURL}
              name={product.name}
              price={product.price}
              loading={loading}
            />
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default ProductList;

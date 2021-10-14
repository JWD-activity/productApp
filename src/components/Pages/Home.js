import React, { useContext, useState } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';
import { SearchTermContext } from '../../contexts/SearchTermContext';
import ProductCard from '../ProductCard/ProductCard';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
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
      return searchParam.some((newProduct) => {
        return (
          product[newProduct]
            .toString()
            .toLowerCase()
            .indexOf(userInput.toLowerCase()) > -1
        );
      });
    });
  };

  const displayProducts = () => {
    const results = searchProduct(search);
    if (results.length > 0) {
      return results.map((product) => (
        <ProductCard
          key={product._id}
          id={product._id}
          imgUrl={product.imgURL}
          name={product.name}
          price={product.price}
          loading={loading}
        />
      ));
    } else
      return (
        <Alert severity='info'>
          <AlertTitle>Search results</AlertTitle>
          Sorry We couldn't find any results— <strong>No results found.</strong>
        </Alert>
      );
  };

  return (
    <Container component='main'>
      <Grid
        container
        spacing={{ xs: 6, sm: 8, lg: 10 }}
        columns={12}
        sx={{ justifyContent: 'center' }}
      >
        {loading ? <CircularProgress color='secondary' /> : displayProducts()}
      </Grid>
    </Container>
  );
}

export default ProductList;

import React, { useContext, useState, useEffect } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';
import ProductCard from '../ProductCard/ProductCard';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

function ProductList() {
  const { state, search, sorting } = useContext(ProductsContext);
  const { post, loading } = state;
  const [searchParam] = useState(['name']);
  const [products, setProducts] = useState([]);

  console.log('render productList');

  const searchProducts = (userInput) => {
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

  // https://stackoverflow.com/questions/7889006/sorting-arrays-in-javascript-by-object-key-value
  const sortProducts = (userInput) => {
    switch (userInput) {
      case 'a-z':
        return products.sort((a, b) =>
          a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
        );

      case 'z-a':
        return products.sort((a, b) =>
          a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1
        );

      case 'highToLow':
        return products.sort((a, b) => Number(a.price) - Number(b.price));

      case 'lowToHigh':
        return products.sort((a, b) => Number(b.price) - Number(a.price));
      default:
        return products;
    }
  };

  useEffect(() => {
    setProducts(post);
  }, [post]);

  useEffect(() => {
    if (search) setProducts(searchProducts(search));
  }, [search]);

  useEffect(() => {
    if (sorting) sortProducts(sorting);
  }, [sorting]);

  const displayProducts = () => {
    // if (search) {
    //   setProducts(searchProducts(search, products));
    // }

    if (products.length > 0) {
      return products.map((product) => (
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

  // useEffect(() => {
  //   searchProducts(search, products);
  //   return () => {};
  // }, [search]);

  // useEffect(() => {
  //   setProducts((prev) => sortProducts(sorting, prev));
  // }, [sorting]);

  return (
    <Container component='main'>
      <Grid
        container
        spacing={{ xs: 6, sm: 8, lg: 10 }}
        columns={12}
        sx={{ justifyContent: 'center' }}
      >
        {loading ? (
          <CircularProgress color='secondary' sx={{ padding: '5rem' }} />
        ) : (
          displayProducts()
        )}
      </Grid>
    </Container>
  );
}

export default ProductList;

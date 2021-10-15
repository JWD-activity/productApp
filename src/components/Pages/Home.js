import React, { useContext, useState, useEffect } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';
import SearchBar from '../SearchBar/SearchBar';
import SortBar from '../SortBar/SortBar';
import ProductCard from '../ProductCard/ProductCard';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';

function ProductList() {
  const { state, search, sorting } = useContext(ProductsContext);
  const { post, loading } = state;
  const [searchParam] = useState(['name']);
  const [products, setProducts] = useState([]);

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

      case '9-0':
        return products.sort((a, b) => Number(b.price) - Number(a.price));

      case '0-9':
        return products.sort((a, b) => Number(a.price) - Number(b.price));

      default:
        return products;
    }
  };

  useEffect(() => {
    setProducts(post);
  }, [post]);

  useEffect(() => {
    if (search) setProducts(searchProducts(search));
    else setProducts(post);
  }, [search]);

  const displayProducts = () => {
    let results = sortProducts(sorting);

    if (loading) {
      return <CircularProgress color='secondary' sx={{ p: '5rem' }} />;
    }

    if (!loading && results.length > 0) {
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
    }

    if (!loading && results.length === 0) {
      return (
        <Alert severity='info' sx={{ m: '5rem' }}>
          <AlertTitle>Search results</AlertTitle>
          Sorry We couldn't find any results —{' '}
          <strong>No results found.</strong>
        </Alert>
      );
    }
  };

  return (
    <Container component='main'>
      <Grid container sx={{ m: '4rem 0', justifyContent: 'end' }}>
        <Grid item sx={{ mr: '2rem' }}>
          <SearchBar />
        </Grid>
        <Grid item>
          <SortBar />
        </Grid>
      </Grid>

      <Grid
        container
        spacing={{ xs: 6, sm: 8, lg: 10 }}
        columns={12}
        component='section'
      >
        {displayProducts()}
      </Grid>
    </Container>
  );
}

export default ProductList;

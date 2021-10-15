import React, { useContext, useState, useEffect } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';
import { sortProducts } from '../../utils/sort';
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

  useEffect(() => {
    setProducts(post);
  }, [post]);

  useEffect(() => {
    if (search) setProducts(searchProducts(search));
    else setProducts(post);
  }, [search]);

  const displayProducts = () => {
    let results = sortProducts(sorting, products);

    if (loading) {
      return <CircularProgress color='secondary' />;
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
        <Grid
          container
          item
          sx={{
            backgroundColor: '#E5F6FD',
            justifyContent: 'center',
            alignItems: 'center',
            py: '5rem',
            my: '5rem',
          }}
        >
          <Alert severity='info'>
            <AlertTitle>Search results</AlertTitle>
            Sorry We couldn't find any results —{' '}
            <strong>No results found.</strong>
          </Alert>
        </Grid>
      );
    }
  };

  return (
    <Container component='main'>
      <Grid
        container
        spacing={{ xs: 6, sm: 7 }}
        columns={12}
        component='section'
        sx={{ justifyContent: 'center', pt: '11rem' }}
      >
        <Grid container sx={{ justifyContent: 'end' }}>
          <Grid item sx={{ mr: '2rem' }}>
            <SearchBar />
          </Grid>
          <Grid item>
            <SortBar />
          </Grid>
        </Grid>

        {displayProducts()}
      </Grid>
    </Container>
  );
}

export default ProductList;

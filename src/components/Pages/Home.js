import React, { useContext, useState, useEffect } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';
import { sortProducts } from '../../utils/sort';
import SearchBar from '../SearchBar/SearchBar';
import SortBar from '../SortBar/SortBar';
import Message from '../Message/Message';
import ProductCard from '../ProductCard/ProductCard';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';

function ProductList() {
  const { state, search, sorting } = useContext(ProductsContext);
  const { post, loading, error } = state;
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

    if (loading) return <CircularProgress color='secondary' />;

    if (error) return <Message status='error' title='Error' message={error} />;

    if (search && results.length === 0)
      return (
        <Message
          status='info'
          title='Search results'
          message='Sorry No results found.'
        />
      );

    if (!loading && results) {
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
        <Grid container sx={{ justifyContent: 'end' }} spacing={2}>
          <Grid item sx={{ mb: '.5rem' }}>
            <SearchBar />
          </Grid>
          <Grid item sx={{ mb: '.5rem' }}>
            <SortBar />
          </Grid>
        </Grid>

        {displayProducts()}
      </Grid>
    </Container>
  );
}

export default ProductList;

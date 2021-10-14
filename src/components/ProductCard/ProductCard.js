import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function ProductCard({ loading, name, imgUrl, price, id }) {
  console.log('render ProductCard');

  return (
    <Grid item xs={12} sm={6} md={4}>
      {!loading ? (
        <Link to={`/product/${id}`}>
          <Card>
            <CardMedia component='img' height='200' image={imgUrl} alt={name} />
            <CardContent>
              <Typography
                gutterBottom
                variant='h1'
                component='div'
                color='primary'
              >
                {name}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {`$${price}`}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      ) : (
        <Card loading={loading}></Card>
      )}
    </Grid>
  );
}

export default ProductCard;

import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function ProductCard({ name, imgUrl, price, id }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Link to={`/product/${id}`}>
        <Card>
          <CardMedia component='img' height='200' image={imgUrl} alt={name} />
          <CardContent>
            <Typography
              gutterBottom
              variant='h6'
              component='h1'
              color='primary'
            >
              {name}
            </Typography>
            <Typography variant='h2' color='text.secondary'>
              {`$${price}`}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
}

export default ProductCard;

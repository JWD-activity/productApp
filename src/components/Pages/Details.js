import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDetails } from '../../utils/fetchingData';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';

const useStyles = makeStyles({
  img: {
    objectFit: 'cover',
    width: '40rem',
  },
});

function Details() {
  const classes = useStyles();
  const { id } = useParams();
  const [details, setDetails] = useState('');

  useEffect(() => {
    const getDtails = async () => {
      setDetails(await fetchDetails(id));
    };
    getDtails();
  }, []);

  console.log(details);

  return (
    <Container component='main'>
      {!details ? (
        <Grid container sx={{ justifyContent: 'center' }}>
          <CircularProgress color='secondary' />
        </Grid>
      ) : (
        <Grid container spacing={{ xs: 4 }} columns={12}>
          <Grid item xs={12} sm={6} md={4} sx={{ overflow: 'hidden' }}>
            <img
              src={details.imgURL}
              alt={details.name}
              className={classes.img}
            />
          </Grid>
          <Grid container item xs={12} sm={6} md={8}>
            <Typography variant='h1' component='h1' color='primary'>
              {details.name}
            </Typography>
            <Typography variant='h5' component='h2' color='text.secondary'>
              ${details.price}
            </Typography>
            <Typography variant='body1' component='p' color='primary'>
              {details.description}
            </Typography>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}

export default Details;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { URL } from '../../utils/constants';
import axios from 'axios';

function Details() {
  const { id } = useParams();
  const [details, setDetails] = useState('');

  useEffect(() => {
    const getDtails = async () => {
      const res = await axios.get(`${URL}/${id}`);
      setDetails(res.data);
    };
    getDtails();
  }, []);

  const displayDetails = () => {
    if (!details) {
      return <CircularProgress color='secondary' />;
    }

    return (
      <>
        <Grid item sx={{ overflow: 'hidden' }} xs={12} sm={6} md={4}>
          <img
            src={details.imgURL}
            alt={details.name}
            style={{ objectFit: 'cover', width: '40rem', marginBottom: '3rem' }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <Stack sx={{ px: '2rem' }}>
            <Typography
              variant='h1'
              component='h1'
              color='primary'
              sx={{ mb: '3rem' }}
            >
              {details.name}
            </Typography>
            <Typography
              variant='h5'
              component='h2'
              color='text.secondary'
              sx={{ mb: '3rem' }}
            >
              ${details.price}
            </Typography>
            <Typography
              variant='body1'
              component='p'
              color='primary'
              sx={{ mb: '3rem' }}
            >
              {details.description}
            </Typography>
          </Stack>
        </Grid>
      </>
    );
  };

  return (
    <Container component='main'>
      <Grid container sx={{ my: '5rem', justifyContent: 'center' }}>
        {displayDetails()}
      </Grid>
    </Container>
  );
}

export default Details;

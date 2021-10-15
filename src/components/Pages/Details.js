import React, { useEffect, useState, useReducer } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { fetchingReducer } from '../../reducers/fetchingReducer';
import { URL, INIT_STATE } from '../../utils/constants';
import Container from '@mui/material/Container';
import Message from '../Message/Message';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function Details() {
  const { id } = useParams();
  const [state, dispatchProducts] = useReducer(fetchingReducer, INIT_STATE);
  const { loading, error } = state;
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/${id}`)
      .then((res) => {
        dispatchProducts({ type: 'FETCH_SUCCESS', payload: res.data });
        setDetails(res.data);
      })
      .catch((err) => {
        dispatchProducts({ type: 'FETCH_ERROR' });
      });
  }, []);

  const displayDetails = () => {
    console.log(loading, details);
    if (loading) return <CircularProgress color='secondary' />;

    if (error) return <Message status='error' title='Error' message={error} />;

    if (details) {
      return (
        <>
          <Grid item sx={{ overflow: 'hidden' }} xs={12} sm={6} md={4}>
            <img
              src={details.imgURL}
              alt={details.name}
              style={{
                objectFit: 'cover',
                width: '40rem',
                marginBottom: '3rem',
              }}
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
    }
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

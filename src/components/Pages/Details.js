import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDetails } from '../../utils/fetchingData';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';

function Details() {
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
        <Grid container>
          <Grid item>
            <img src={details.imgURL} alt={details.name} />
          </Grid>
          <Grid container item>
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

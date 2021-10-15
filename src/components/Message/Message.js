import React from 'react';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';

function Message({ status, title, message }) {
  return (
    <Grid
      container
      item
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        p: '5rem',
        my: '5rem',
      }}
    >
      <Alert severity={status} sx={{ px: '10rem' }} variant='filled'>
        <strong>{title}</strong> - {message}
      </Alert>
    </Grid>
  );
}

export default Message;

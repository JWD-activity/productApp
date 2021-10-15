import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// const ariaLabel = { 'aria-label': 'search field' };

function Navbar() {
  return (
    <AppBar position='static'>
      <Toolbar component='nav'>
        <Link to='/'>
          <Typography variant='h6' component='h1' color='text.primary'>
            Products
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

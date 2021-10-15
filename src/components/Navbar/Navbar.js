import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../../contexts/ProductsContext';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// const ariaLabel = { 'aria-label': 'search field' };

function Navbar() {
  const { setSearchTerm } = useContext(ProductsContext);

  const clickHandler = () => {
    setSearchTerm('');
  };

  return (
    <AppBar position='static'>
      <Toolbar component='nav'>
        <Link to='/productApp' onClick={clickHandler}>
          <Typography variant='h6' component='h1' color='text.primary'>
            Products
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

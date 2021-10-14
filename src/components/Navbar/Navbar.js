import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import { ProductsContext } from '../../contexts/ProductsContext';

// const ariaLabel = { 'aria-label': 'search field' };

function Navbar() {
  const { search, setSearchTerm, sorting, setSort } =
    useContext(ProductsContext);

  const searchChangeHandler = (e) => {
    setSearchTerm(e.target.value.trim());
  };

  const sortChangeHandler = (e) => {
    setSort(e.target.value);
  };

  return (
    <AppBar position='static'>
      <Toolbar component='nav'>
        <Link to='/'>
          <Typography
            variant='h6'
            component='h1'
            sx={{ flexGrow: 1, display: 'flex', color: '#fff' }}
          >
            Products
          </Typography>
        </Link>
        <Grid
          container
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Grid container item sx={{ alignItems: 'center', margin: '0 5rem' }}>
            <Grid item>
              <SearchIcon sx={{ color: '#fff', marginRight: '1rem' }} />
            </Grid>
            <Grid item>
              <Input
                placeholder='Search'
                // InputProps={ariaLabel}
                color='secondary'
                value={search}
                onChange={searchChangeHandler}
              />
            </Grid>
            <Grid item>
              <FormControl
                fullWidth
                sx={{
                  m: 1,
                  minWidth: 80,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <InputLabel id='sort-by-label' color='secondary'>
                  Sort By
                </InputLabel>
                <Select
                  labelId='sort-by-label'
                  id='sort-by-select'
                  value={sorting}
                  label='Sort by'
                  onChange={sortChangeHandler}
                  sx={{ minWidth: '20rem' }}
                  color='secondary'
                >
                  <MenuItem value='a-z'>Apphbeically, A-Z</MenuItem>
                  <MenuItem value='z-a'>Apphbeically, Z-A</MenuItem>
                  <MenuItem value='lowToHigh'>Price, Low to High</MenuItem>
                  <MenuItem value='highToLow'>Price, High to Low</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

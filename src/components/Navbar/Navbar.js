import React from 'react';
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

const ariaLabel = { 'aria-label': 'search field' };

function Navbar() {
  console.log('render Navbar');

  const [sorting, setSorting] = React.useState('');

  const handleChange = (event) => {
    setSorting(event.target.value);
  };

  return (
    <AppBar position='static'>
      <Toolbar component='nav'>
        <Typography
          variant='h6'
          component='h1'
          sx={{ flexGrow: 1, display: 'flex' }}
        >
          Products
        </Typography>
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
                <InputLabel id='sort-by' color='secondary'>
                  Sort By
                </InputLabel>
                <Select
                  labelId='sort-by'
                  id='sort-by-select'
                  value={sorting}
                  label='Sort by'
                  onChange={handleChange}
                  sx={{ minWidth: '20rem' }}
                  color='secondary'
                >
                  <MenuItem value={1}>Apphbeically, A-Z</MenuItem>
                  <MenuItem value={2}>Apphbeically, Z-A</MenuItem>
                  <MenuItem value={3}>Row Price</MenuItem>
                  <MenuItem value={34}>High Price</MenuItem>
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

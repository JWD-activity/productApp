import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  console.log('render Navbar');

  return (
    <header>
      <Box sx={{ flexGrow: 1 }} className='menu'>
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              News
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
}

export default Navbar;

{
  /* <Row>
          <Col className='logo'>
            <a href='/'>Products</a>
          </Col>
          <Col>
            <Row className='menu__input'>
              <Col className='search'>
                <Search
                  aria-label='Search for products '
                  placeholder='Search'
                  // onSearch={onSearch}
                  enterButton
                />
              </Col>
              <Col className='filter'>
                <Select
                  placeholder='Sort by'
                  aria-label='sorting select option'
                >
                  <Option value='1'>Apphbeically, A-Z</Option>
                  <Option value='2'>Apphbeically, Z-A</Option>
                  <Option value='3'>Row Price</Option>
                  <Option value='4'>High Price</Option>
                </Select>
              </Col>
            </Row>
          </Col>
        </Row> */
}
{
  /* </nav> */
}

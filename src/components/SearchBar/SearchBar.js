import React, { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
  const { search, setSearchTerm } = useContext(ProductsContext);

  const searchChangeHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Input
      placeholder='Search'
      // InputProps={ariaLabel}
      color='secondary'
      value={search}
      onChange={searchChangeHandler}
      startAdornment={
        <InputAdornment position='start'>
          <SearchIcon />
        </InputAdornment>
      }
    />
  );
}

export default SearchBar;

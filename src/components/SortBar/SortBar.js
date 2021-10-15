import React, { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function SortBar() {
  const { sorting, setSort } = useContext(ProductsContext);

  const sortChangeHandler = (e) => {
    setSort(e.target.value);
  };

  return (
    <FormControl fullWidth variant='filled'>
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
        <MenuItem value='0-9'>Price, Low to High</MenuItem>
        <MenuItem value='9-0'>Price, High to Low</MenuItem>
      </Select>
    </FormControl>
  );
}

export default SortBar;

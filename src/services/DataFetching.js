import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Datafetching() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://products-api-01.herokuapp.com/api/products')
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(products);

  return <div></div>;
}

export default Datafetching;

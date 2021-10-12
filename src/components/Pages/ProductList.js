import React, { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';
import ProductCard from '../../components/ProductCard/ProductCard';
import { Row } from 'antd';
function ProductList() {
  const { state } = useContext(ProductsContext);

  return (
    <Row
      justify='space-around'
      align='middle'
      gutter={[{ xs: 8, sm: 16, md: 24, lg: 56 }, 40]}
    >
      {state.post.map((product) => (
        <ProductCard
          key={product._id}
          imgUrl={product.imgURL}
          name={product.name}
          price={product.price}
          loading={state.loading}
        ></ProductCard>
      ))}
    </Row>
  );
}

export default ProductList;

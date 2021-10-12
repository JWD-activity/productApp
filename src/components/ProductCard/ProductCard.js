import React, { useContext, useState, useEffect } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';
import { Card } from 'antd';

const { Meta } = Card;

function ProductCard() {
  const { state } = useContext(ProductsContext);
  const [loading, setLoading] = useState(true);

  return !state.loading ? (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <img
          alt='example'
          src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
        />
      }
    >
      <Meta title='Europe Street beat' description='www.instagram.com' />
    </Card>
  ) : (
    <Card loading={loading}></Card>
  );
}

export default ProductCard;

import React from 'react';
import { Card, Col } from 'antd';

const { Meta } = Card;

function ProductCard({ loading, name, imgUrl, price }) {
  console.log('render ProductCard');
  return (
    <Col className='gutter-row' sx={24} sm={8} lg={6}>
      {!loading ? (
        <Card hoverable cover={<img alt={name} src={imgUrl} />}>
          <Meta title={name} description={`$${price}`} />
        </Card>
      ) : (
        <Card loading={loading}></Card>
      )}
    </Col>
  );
}

export default ProductCard;

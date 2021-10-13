import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col } from 'antd';

const { Meta } = Card;

function ProductCard({ loading, name, imgUrl, price, id }) {
  console.log('render ProductCard');
  const clickHandler = () => {
    console.log('click');
  };

  return (
    <Col className='gutter-row' sx={24} sm={8} lg={6}>
      {!loading ? (
        <Link to={`/product/${id}`}>
          <Card
            hoverable
            cover={<img alt={name} src={imgUrl} onClick={clickHandler} />}
          >
            <Meta title={name} description={`$${price}`} />
          </Card>
        </Link>
      ) : (
        <Card loading={loading}></Card>
      )}
    </Col>
  );
}

export default ProductCard;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDetails } from '../../utils/fetchingData';
import { Row, Col } from 'antd';

function Details() {
  const { id } = useParams();
  const [details, setDetails] = useState('');

  useEffect(() => {
    const getDtails = async () => {
      setDetails(await fetchDetails(id));
    };
    getDtails();
  }, []);

  console.log(details);

  return (
    <>
      {!details ? (
        <div>loading...</div>
      ) : (
        <Row>
          <Col xs={24} sm={8} md={12}>
            <img src={details.imgURL} alt={details.name} />
          </Col>
          <Col xs={24} sm={16} md={12}>
            <Row>{details.name}</Row>
            <Row>{details.price}</Row>
            <Row>{details.description}</Row>
          </Col>
        </Row>
      )}
    </>
  );
}

export default Details;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDetails } from '../../utils/fetchingData';

function Details() {
  // const { id } = useParams();
  // const [details, setDetails] = useState('');

  // useEffect(() => {
  //   const getDtails = async () => {
  //     setDetails(await fetchDetails(id));
  //   };
  //   getDtails();
  // }, []);

  // console.log(details);

  // return (
  //   <>
  //     {!details ? (
  //       <Row>Loading</Row>
  //     ) : (
  //       <Row>
  //         <Col>
  //           <img src={details.imgURL} alt={details.name} />
  //         </Col>
  //         <Col>
  //           <Row>{details.name}</Row>
  //           <Row>{details.price}</Row>
  //           <Row>{details.description}</Row>
  //         </Col>
  //       </Row>
  //     )}
  //   </>
  // );
  return <>h</>;
}

export default Details;

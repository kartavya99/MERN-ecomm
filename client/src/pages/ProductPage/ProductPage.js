import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCT } from "../../utils/queries";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";

const ProductPage = () => {
  const [qty, setQty] = useState();

  const { id } = useParams();
  const { data, loading } = useQuery(QUERY_PRODUCT, {
    variables: { id },
  });

  if (loading) return <Loader />;
  console.log(data);
  console.log(data.product.productName);
  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        GO BACK
      </Link>

      {loading ? (
        <Loader />
      ) : (
        <>
          <Row className=" m-3 pr-5">
            <Col me={6}>
              <Image
                src={data.product.image}
                alt={data.product.productName}
                fluid
              />
            </Col>

            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{data.product.productName}</h3>
                </ListGroup.Item>
                <ListGroup.Item>Price: ${data.product.price}</ListGroup.Item>
                <ListGroup.Item>
                  Description: {data.product.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default ProductPage;

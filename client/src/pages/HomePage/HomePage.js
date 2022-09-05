import React from "react";
import { Row, Col } from "react-bootstrap";
import ProductList from "../../components/ProductList/ProductList";

import { useQuery } from "@apollo/client";
import { QUERY_ALL_PRODUCTS } from "../../utils/queries";
import classes from "./HomePage.module.css";

const HomePage = () => {
  const { data, loading } = useQuery(QUERY_ALL_PRODUCTS);
  //   console.log(data);
  return (
    <>
      <div className={classes.main}>
        <p className={classes.heading}>ECOMMERECE PLATFORM </p>
      </div>
      <Row>
        {data &&
          !loading &&
          data.getAllProducts.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <ProductList product={product} />
            </Col>
          ))}
      </Row>
    </>
  );
};

export default HomePage;

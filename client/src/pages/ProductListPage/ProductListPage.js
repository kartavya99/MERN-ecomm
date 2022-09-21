import React from "react";
import { Table, Button, Row, Col } from "react-bootstrap";

import classes from "./ProductListPage.module.css";

const ProductListPage = () => {
  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>PRODUCTS</h1>
        </Col>

        <Col className="text-right">
          <Button className={classes["btn-primary"]}> ➕ Create Product</Button>
        </Col>
      </Row>
    </>
  );
};

export default ProductListPage;

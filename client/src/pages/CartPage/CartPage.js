import React from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";

const CartPage = () => {
  return (
    <Row>
      <Col me={8}>
        &nbsp;
        <h1>SHOPPING CART</h1>
        &nbsp;
        <h4>
          your cart is empty <Link to="/">GO BACK</Link>
        </h4>
      </Col>
    </Row>
  );
};

export default CartPage;

import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { Link, useParams, useLocation } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCT } from "../../utils/queries";
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
  // const [state, dispatch] = useStoreContext();
  // const { cart } = state;
  // console.log(cart);

  // const location = useLocation();
  // const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  // console.log(qty);

  //   const { id } = useParams();
  //   const { data, loading } = useQuery(QUERY_PRODUCT, {
  //     variables: { id },
  //   });

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

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
  const [state, dispatch] = useStoreContext();
  const { cart } = state;
  // console.log(cart);

  const location = useLocation();
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  console.log(qty);

  const { id } = useParams();
  const { data, loading } = useQuery(QUERY_PRODUCT, {
    variables: { id },
  });

  return (
    <Row>
      <Col me={8}>
        &nbsp;
        <h1>SHOPPING CART</h1>
        &nbsp;
        {cart.length === 0 ? (
          <h4>
            your cart is empty <Link to="/">GO BACK</Link>
          </h4>
        ) : (
          <ListGroup variant="flush">
            {cart.map((item) => {
              console.log(item);

              return (
                <ListGroup.Item key={item._id}>
                  <Row>
                    <Col md={2}>
                      <Image
                        src={item.product.image}
                        atl={item.product.productName}
                        fluid
                        rounded
                      />
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${item.product}`}>
                        {item.product.productName}
                      </Link>
                    </Col>
                    <Col md={2}>${item.product.price}</Col>
                    <Col md={2}>
                      <Form.Control as="select" value={item.qty}>
                        {[...Array(item.product.countInStock).keys()].map(
                          (x) => (
                            <option key={x + 1} value={x + 1}>
                              {" "}
                              {x + 1}
                            </option>
                          )
                        )}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        )}
      </Col>
    </Row>
  );
};

export default CartPage;

import React from "react";
import { Table, Button, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import classes from "./ProductListPage.module.css";
import { QUERY_ALL_PRODUCTS } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import Loader from "../../components/Loader/Loader";
import { BsTrash } from "react-icons/bs";
import { BsFileEarmarkDiffFill } from "react-icons/bs";

const ProductListPage = () => {
  const { data, loading } = useQuery(QUERY_ALL_PRODUCTS);
  console.log(data);

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
      {loading ? (
        <Loader />
      ) : (
        data.getAllProducts.map((product) => {
          return (
            <>
              <Table striped bordered hover responsive className="table-sm">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>BRAND</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={product._id}>
                    <td>{product._id}</td>
                    <td>{product.productName}</td>
                    <td>${product.price}</td>
                    <td>{product.brand}</td>
                    <td>
                      <LinkContainer to={`/admin/product/1/edit`}>
                        <Button variant="light" className="btn-sm">
                          <BsFileEarmarkDiffFill />
                        </Button>
                      </LinkContainer>
                      <Button variant="light" className="btn-sm">
                        <BsTrash />
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </>
          );
        })
      )}
    </>
  );
};

export default ProductListPage;

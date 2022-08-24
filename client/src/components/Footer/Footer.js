import React from "react";
import { Row, Col } from "react-bootstrap";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={classes.container}>
        <Row>
          <Col className={classes.footer}>Copyright &copy; E-COMM SHOP</Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;

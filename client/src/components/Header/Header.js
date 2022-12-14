import React from "react";

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { BsCartCheck, BsLink } from "react-icons/bs";
import { FaSignInAlt } from "react-icons/fa";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="-xl">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className={classes.logo}>E-COMM SHOP</Navbar.Brand>
          </LinkContainer>
          <LinkContainer to="/cart/:id">
            <Navbar.Brand className={classes.link}>
              {" "}
              <span>
                <BsCartCheck className={classes.cart} />
                Cart
              </span>
            </Navbar.Brand>
          </LinkContainer>

          <NavDropdown title="User" id="user" className={classes.link}>
            <NavDropdown.Item className={classes.item}>
              PROFILE
            </NavDropdown.Item>
            <NavDropdown.Item className={classes.item}>LOGOUT</NavDropdown.Item>
          </NavDropdown>

          <LinkContainer to="/login">
            <Navbar.Brand className={classes.link}>
              <span className={classes["sign-in"]}>
                <FaSignInAlt />
              </span>
              SIGN IN
            </Navbar.Brand>
          </LinkContainer>
          <NavDropdown
            title="Admin"
            id="adminmenu"
            className={classes["admin-menu"]}
          >
            <LinkContainer to="admin/userlist">
              <NavDropdown.Item className={classes.item}>
                Users
              </NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="admin/productlist">
              <NavDropdown.Item className={classes.item}>
                Products
              </NavDropdown.Item>
            </LinkContainer>

            <NavDropdown.Item className={classes.item}>Orders</NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

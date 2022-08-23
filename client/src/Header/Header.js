import React from "react";

import { Container, Nav, Navbar, Form, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <Header>
      <p>Hello</p>
      <Navbar bg="dark" variant="dark" expand="-xl">
        <Container>
          <Navbar.Brand>E-comm Shop</Navbar.Brand>

          <NavDropdown>
            <NavDropdown.Item>Users</NavDropdown.Item>

            <NavDropdown.Item>Products</NavDropdown.Item>

            <NavDropdown.Item>Orders</NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
    </Header>
  );
};

export default Header;

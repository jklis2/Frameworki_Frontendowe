import React, { FC } from "react";
import "../css/Global/Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";

interface loginState {
  logged: boolean
}

const Header: FC = (props) => {

  const [logged, setLogged] = useState(false);

  return (
    <div>
      <Navbar className="navbar" bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <div className="logo-text">
              <img
                src={`${process.env.PUBLIC_URL}/img/Logo.png`}
                alt="Logo ShareItNow"
              />
              <h1>Share It Now</h1>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
              <Nav.Link href="/Posts">Posts</Nav.Link>
              <Nav.Link href="/Feed">Feed</Nav.Link>
              <Nav.Link href="/Users">Search User</Nav.Link>
              <Nav.Link href="/Photos">Search Photo</Nav.Link>
              {logged ? (<Nav.Link href="/">Logout</Nav.Link>) : (<Nav.Link href="/Login">Login</Nav.Link>) }
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

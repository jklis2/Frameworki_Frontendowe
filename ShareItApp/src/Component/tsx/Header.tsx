import React, { FC } from "react";
import "../css/Header.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header: FC = () => {
    return (<div>
      <Navbar className="navbar" bg="dark" variant="dark">
        <Container className="navbar-container">
          <Navbar.Brand href="#home">
            <div className="logo-text">
                <img src={`${process.env.PUBLIC_URL}/img/Logo.png`} alt="Logo ShareItNow"/>
                <h1>Share It Now</h1>
            </div>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Menu</Nav.Link>
            <Nav.Link href="/Users">Search User</Nav.Link>
            <Nav.Link href="/Photos">Search Photo</Nav.Link>
            <Nav.Link href="/Login">Login/Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>)
}


export default Header
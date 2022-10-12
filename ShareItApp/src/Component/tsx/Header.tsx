import React from "react";
import "../css/Header.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (<div>
      <Navbar className="navbar" bg="dark" variant="dark">
        <Container className="navbar-container">
          <Navbar.Brand href="#home">
            <img src={`${process.env.PUBLIC_URL}/img/Logo.png`} alt="Logo ShareItNow"/>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>)
}


export default Header
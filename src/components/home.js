import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Container, Row, Col } from "react-bootstrap"
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import { Button, ButtonGroup } from 'react-bootstrap';
import "./home.css"
import "bootstrap-icons/font/bootstrap-icons.css"
export default function Home() {
  const navigate = useNavigate();
  const navtohome = () => {
    navigate("/");
  };
  const navtoabout = () => {
    navigate("/about");
  }
  const navtocontact = () => {
    navigate("/contact");
  };
  const navtosignin = () => {
    navigate("/signin");
  };
  const navtosignup = () => {
    navigate("/signup");
  };
  const navtosignupcom = () => {
    navigate("/signupcom");
  };
  const navtosignincom = () => {
    navigate("/signincom");
  };
  const navtosigninadmin = () => {
    navigate("/signinadmin");
  };
  return (
    <>

      <div className='bimg'>
        <Navbar className="bg-body-tertiary mt=0">
          <Container fluid>
            <Navbar.Brand href="/" style={{ color: "rgb(31, 99, 145)" }}><h1>Jobistics</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav " className='justify-content-end'>
              <Nav>
                <Nav.Link href="/" onClick={navtohome} className='fw-bold'>Home</Nav.Link>
                <Nav.Link href="/about" onClick={navtoabout} className='fw-bold'>About</Nav.Link>
                <Nav.Link href="/contact" onClick={navtocontact} className='fw-bold'>Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Navbar>
          <Navbar.Collapse id="basic-navbar-nav " className='justify-content-end'>

            <Nav>
              <Nav.Link href="/signincom" className='fw-bold text-white'>Post Job</Nav.Link>
              <p className='text-white mt-1'>|</p>
              <Nav.Link href="/signin" className='fw-bold text-white'>Find Job</Nav.Link>
              <hr className='text-white' />
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <h2 className='fw-bold text-white title '>Grow Your Career <br></br>  With us</h2>
        <ButtonGroup className='signupapp'>
          <Button variant="light" onClick={navtosignup} >Get Job</Button>
          <Button variant="light" onClick={navtosignupcom} >Find Candidate</Button>
        </ButtonGroup>
        <br></br>
        <ButtonGroup className='admin mt-3'>
          <Button variant="light" onClick={navtosigninadmin} >I am Admin</Button>
        </ButtonGroup>


      </div>



    </>
  )
}









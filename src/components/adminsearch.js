import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import SideBar from "./adminsidebar.js"
import Nav from 'react-bootstrap/Nav';
import { Container, Row, Col } from "react-bootstrap"
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
export default function AdminSearch()
{
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
    return(
        <>
            <Container fluid>
                <Row>
                    <Col>
                        {/* <div className="container-fluid bg-white min-vh-100" > */}
                        <Navbar expand="lg" className="bg-body-tertiary" >
                            <div className="container-fluid" style={{ backgroundColor: "rgb(31, 99, 145)" }}>
                                <Navbar.Brand href="/" ><h1 className='ms-0 text-white'>Jobistics</h1></Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav " className='justify-content-end'>
                                    <Nav>
                                        <Nav.Link href="/" onClick={navtohome} className='fw-bold text-white'>Home</Nav.Link>
                                        <Nav.Link href="/about" onClick={navtoabout} className='fw-bold text-white'>About</Nav.Link>
                                        <Nav.Link href="/contact" onClick={navtocontact} className='fw-bold text-white'>Contact</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </div>
                        </Navbar>
                        {/* </div> */}
                    </Col>
                </Row>
                <Row>
                    <Col lg={2}>
                        <SideBar />
                    </Col>
                    
                </Row>
            </Container>
        </>
    )
}
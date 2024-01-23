import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import AppSideBar from "./appsidebar.js"
import Nav from 'react-bootstrap/Nav';
import { Container, Row, Col } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

export default function AppAppliedJobs() {
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
    const navtoappviewdet=()=>
      {
        navigate("/appviewdet")
      }
    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
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
                        
                    </Col>
                </Row>
                <Row>
                    <Col lg={2}>
                        <AppSideBar />
                    </Col>
                    <Col>
                        <form className=' justify-content-start '>
                            <input type="text" className="border-color-primary w-100 h-3 my-3" placeholder='Search Applied Jobs..'></input>
                        </form>
                        <div className='d-inline-flex'>
                            <Card style={{ width: '18rem' }} className='mx-2 p-2'>
                                <Card.Img variant="top" src="comimg.png" />
                                <Card.Body>
                                    <Card.Title><h3><strong>ACCENTURE</strong></h3></Card.Title>
                                 
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item><strong>Job Title:</strong> Software Developer</ListGroup.Item>
                                    <ListGroup.Item><strong>Salary:</strong>  50k-60k</ListGroup.Item>
                                    <ListGroup.Item></ListGroup.Item>
                                </ListGroup>
                                <Card.Body>
                                    <Button variant="primary bn m-1" style={{ backgroundColor: "rgb(31, 99, 145)" }} >Undo Request</Button>
                                    <Button variant="primary bn m-1" style={{ backgroundColor: "rgb(31, 99, 145)" }} onClick={navtoappviewdet}>View Details</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }} className='mx-2 p-2'>
                                <Card.Img variant="top" src="comimg.png" />
                                <Card.Body>
                                    <Card.Title><h3><strong>OKINFO</strong></h3></Card.Title>
                                   
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item><strong>Job Title:</strong> Software Developer</ListGroup.Item>
                                    <ListGroup.Item><strong>Salary:</strong>  30k-40k</ListGroup.Item>
                                    <ListGroup.Item></ListGroup.Item>
                                </ListGroup>
                                <Card.Body>
                                    <Button variant="primary bn m-1" style={{ backgroundColor: "rgb(31, 99, 145)" }} >Undo Request</Button>
                                    <Button variant="primary bn m-1" style={{ backgroundColor: "rgb(31, 99, 145)" }} onClick={navtoappviewdet}>View Details</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }} className='mx-2 p-2'>
                                <Card.Img variant="top" src="comimg.png" />
                                <Card.Body>
                                    <Card.Title><h3><strong>OKINFO</strong></h3></Card.Title>
                                   
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item><strong>Job Title:</strong> Software Developer</ListGroup.Item>
                                    <ListGroup.Item><strong>Salary:</strong>  85k-90k</ListGroup.Item>
                                    <ListGroup.Item></ListGroup.Item>
                                </ListGroup>
                                <Card.Body>
                                    <Button variant="primary bn m-1" style={{ backgroundColor: "rgb(31, 99, 145)" }} >Undo Request</Button>
                                    <Button variant="primary bn m-1" style={{ backgroundColor: "rgb(31, 99, 145)" }} onClick={navtoappviewdet}>View Details</Button>
                                </Card.Body>
                            </Card>


                        </div>
                    </Col>

                </Row>
            </Container>
        </>
    )
}
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import AppSideBar from "./appsidebar.js"
import Nav from 'react-bootstrap/Nav';
import { Container, Row, Col } from "react-bootstrap"
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "./dashboard_app.css"
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function AppJobs() {
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
    const navtoapply = () => {
        navigate("/appapplyjob")
    }
    const navtoappviewdet = () => {
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
                        {/* </div> */}
                    </Col>
                </Row>
                <Row>
                    <Col lg={2}>
                        <AppSideBar />
                    </Col>
                    <Col>
                        <form className=' justify-content-start '>
                            <input type="text" className="border-color-primary w-100 h-3 my-3" placeholder='Search Recruiters..'></input>
                        </form>
                        <h5 className='m-2 p-2'>Recruiters you may like</h5>
                        <div className='d-inline-flex'>
                            <Card style={{ width: '18rem' }} className='p-2 m-2'>
                                <Card.Img variant="top" src="comimg.png" />
                                <Card.Body>
                                    <Card.Title><strong>VINFO</strong></Card.Title>
                                    <Card.Text>
                                        <p>6th Avenue,East Street,<br></br>Adyar,Chennai<br></br>600025</p>
                                    </Card.Text>
                                    <Button variant="primary bn m-1" style={{ backgroundColor: "rgb(31, 99, 145)" }} onClick={navtoapply}>Apply Job</Button>
                                    <Button variant="primary bn m-1" style={{ backgroundColor: "rgb(31, 99, 145)" }} onClick={navtoappviewdet}>View Details</Button>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }} className='p-2 m-2'>
                                <Card.Img variant="top" src="comimg.png" />
                                <Card.Body>
                                    <Card.Title><strong>AGROBEE</strong></Card.Title>
                                    <Card.Text>
                                        <p>10 Bangalore-Mysore Road<br></br>Bangalore South,Bengaluru<br></br> 560039</p>
                                    </Card.Text>
                                    <Button variant="primary bn m-1" style={{ backgroundColor: "rgb(31, 99, 145)" }} onClick={navtoapply}>Apply Job</Button>
                                    <Button variant="primary bn m-1" style={{ backgroundColor: "rgb(31, 99, 145)" }} onClick={navtoappviewdet}>View Details</Button>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }} className='p-2 m-2'>
                                <Card.Img variant="top" src="comimg.png" />
                                <Card.Body>
                                    <Card.Title><strong>TREDTECH</strong></Card.Title>
                                    <Card.Text>
                                        <p>6th Avenue,West Street,<br></br>Tambaram,Chennai<br></br>600024</p>
                                    </Card.Text>
                                    
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
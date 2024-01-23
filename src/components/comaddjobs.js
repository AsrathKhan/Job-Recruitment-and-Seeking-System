import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import ComSideBar from "./comsidebar.js"
import Nav from 'react-bootstrap/Nav';
import { Container, Row, Col } from "react-bootstrap"
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

export default function ComAddJobs() {
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
    return (
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
                        <ComSideBar />
                    </Col>
                    <Col>
                        <div>
                            <div className="container bootstrap snippets bootdey">
                                <h1 style={{ color: "rgb(31, 99, 145)" }}>Add Job</h1>
                                <hr />
                                <div className="row">
                                    <div className="col-md-9 personal-info">
                                        <h3>Job info</h3>

                                        <form className="form-horizontal" role="form">
                                            <div className="form-group">
                                                <label className="col-lg-3 control-label">Job Title:</label>
                                                <div className="col-lg-8">
                                                    <div className="ui-select">
                                                        <select className="form-control">
                                                            <option value="Software" selected="selected">Software Development</option>
                                                            <option value="Web">Web Development</option>
                                                            <option value="Web">Web Designing</option>
                                                            <option value="FullStack">FullStack Development</option>
                                                            <option value="Front-End">Front-End Developer</option>
                                                            <option value="Back-End" >Back-End Developer</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label className="col-lg-3 control-label">Job Type:</label>
                                                <div className="col-lg-8">
                                                    <div className="ui-select">
                                                        <select className="form-control">
                                                            <option value="Full" selected="selected">Full-Time</option>
                                                            <option value="Part">Part-Time</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className='my-2'>Salary Package</label>
                                                <div className='row'>
                                                <div class="d-inline-flex">
                                                    <label className='px-2 mx-2'>From:</label>
                                                    <input type="text" className="form-control w-25" placeholder="Eg:50k" />
                                                    <label className='px-2 mx-2'>To:</label>
                                                    <input type="text" className="form-control w-25" placeholder="Eg:60k" />
                                                    </div>
                                            </div>
                                            </div>


                                            <div className="form-group">
                                                <label className="col-lg-3 control-label">Job Location:</label>
                                                <div className="col-lg-8">
                                                    <input className="form-control" type="text" placeholder='Eg:Chennai' />
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label className="col-lg-3 control-label">Pincode:</label>
                                                <div className="col-lg-8">
                                                    <input className="form-control" type="text" placeholder='Eg:632594' />
                                                </div>
                                            </div>
                                            <div className='d-inline-flex m-3 p-3'>
                                                <button type="button" className="btn btn-primary btn-md mx-2" style={{ backgroundColor: "rgb(31, 99, 145)" }}>
                                                    Cancel
                                                </button>
                                                <button type="button" className="btn btn-primary btn-md mx-2" style={{ backgroundColor: "rgb(31, 99, 145)" }}>
                                                    Add 
                                                </button>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </div>
                    </Col>

                </Row>
            </Container>
        </>
    )
}
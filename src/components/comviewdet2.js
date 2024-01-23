import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import AppSideBar from "./appsidebar.js"
import Nav from 'react-bootstrap/Nav';
import { Container, Row, Col } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "./dashboard_app.css"
import "./style.css";

export default function ComViewDet2() {
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
    const navtocomacceptedjobs = () => {
        navigate("/comacceptjobs")
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
                <Container>

                    <Row>

                        <Col>
                            <Col>
                                <div className="container bootstrap snippets bootdey">
                                    <h1 style={{ color: "rgb(31, 99, 145)" }}>Applicant Details</h1>
                                    <hr />
                                    <div className="row ">
                                        <div className='col me-0'>

                                            <div className="text-start ">
                                                <img src="resumedemo.jpg" className="avatar img-circle img-thumbnail h-50" alt="resume" />


                                            </div>
                                        </div>

                                        <div className="col ms-0 mt-3">
                                            <div className="table-responsive">
                                                <table className="table table-user-information h-100%">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <strong>
                                                                    <span className="glyphicon glyphicon-envelope text-primary"></span>
                                                                    Applicant Name
                                                                </strong>
                                                            </td>
                                                            <td className="text-primary">
                                                                Hari Jeyanth
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>
                                                                    <span className="glyphicon glyphicon-envelope text-primary"></span>
                                                                    Email
                                                                </strong>
                                                            </td>
                                                            <td className="text-primary">
                                                                jeyahari@gmail.com
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>
                                                                    <span className="glyphicon glyphicon-asterisk text-primary"></span>
                                                                    Department
                                                                </strong>
                                                            </td>
                                                            <td className="text-primary">
                                                                Computer Science and Engineering
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>
                                                                    <span className="glyphicon glyphicon-user  text-primary"></span>
                                                                    Degree
                                                                </strong>
                                                            </td>
                                                            <td className="text-primary">
                                                                Bachelor of Engineering
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>
                                                                    <span className="glyphicon glyphicon-cloud text-primary"></span>
                                                                    Skills
                                                                </strong>
                                                            </td>
                                                            <td className="text-primary">
                                                                <ul>
                                                                    <li>HTML</li>
                                                                    <li>CSS</li>
                                                                    <li>Java</li>
                                                                </ul>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <strong>
                                                                    <span className="glyphicon glyphicon-bookmark text-primary"></span>
                                                                    Work Experience
                                                                </strong>
                                                            </td>
                                                            <td className="text-primary">
                                                                Fresher
                                                            </td>
                                                        </tr>


                                                        <tr>
                                                            <td>
                                                                <strong>
                                                                    <span className="glyphicon glyphicon-bookmark text-primary"></span>
                                                                     Location
                                                                </strong>
                                                            </td>
                                                            <td className="text-primary">
                                                                Chennai
                                                            </td>
                                                        </tr>


                                                        <tr>
                                                            <td>
                                                                <strong>
                                                                    <span className="glyphicon glyphicon-eye-open text-primary"></span>
                                                                    Pincode
                                                                </strong>
                                                            </td>
                                                            <td className="text-primary">
                                                                600032
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div className=' my-3'>
                                            <button type="reset" class="btn btn-light w-25" onClick={navtocomacceptedjobs}>Back </button>



                                        </div>
                                            </div>

                                        </div>
                                        


                                        <hr />
                                    </div>
                                </div>

                            </Col>

                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

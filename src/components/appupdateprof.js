import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import AppSideBar from "./appsidebar.js"
import Nav from 'react-bootstrap/Nav';
import { Container, Row, Col, Button } from "react-bootstrap"
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

export default function AppUpdateProf() {
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
                        <div>
                            <div className="container bootstrap snippets bootdey">
                                <h1 style={{ color: "rgb(31, 99, 145)" }}>Edit Profile</h1>
                                <hr />
                                <div className="row">

                                    <div className="col-md-3">
                                        <div className="text-center">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" className="avatar img-circle img-thumbnail" alt="avatar" />
                                            <h6>Upload a different photo...</h6>

                                            <input type="file" className="form-control" />
                                        </div>
                                        <div className="text-center">
                                            <img src="resumedemo.jpg" className="avatar img-circle img-thumbnail mt-5" alt="resume" />
                                            <h6>Upload a different resume...</h6>

                                            <input type="file" className="form-control" />
                                        </div>
                                    </div>


                                    <div className="col-md-9 personal-info ">
                                        <h3>Personal info</h3>

                                        <form className="form-horizontal" role="form">
                                            <div className="form-group">
                                                <label className="col-lg-3 control-label">First name:</label>
                                                <div className="col-lg-8">
                                                    <input className="form-control" type="text" value="Hari" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-lg-3 control-label">Last name:</label>
                                                <div className="col-lg-8">
                                                    <input className="form-control" type="text" value="Jeyanth" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-lg-3 control-label">Email:</label>
                                                <div className="col-lg-8">
                                                    <input className="form-control" type="text" value="jeyahari@gmail.com" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-lg-3 control-label">Department:</label>
                                                <div className="col-lg-8">
                                                    <input className="form-control" type="text" value="Computer Science and Engineering" />
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label className="col-lg-3 control-label">Degree:</label>
                                                <div className="col-lg-8">
                                                    <div className="ui-select">
                                                        <select className="form-control">
                                                            <option value="Bachelor of Engineering" selected="selected">Bachelor of Engineering</option>
                                                            <option value="Master of Engineering">Master of Engineering</option>
                                                            <option value="Dilpoma">Dilpoma</option>
                                                            <option value="Bachelor of Arts">Bachelor of Arts</option>
                                                            <option value="Master of Arts">Master of Arts</option>
                                                            <option value="Phd" >Doctor of Philosophy</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="mt-2 mb-2">Skills</label>
                                                <div className="form-check ">

                                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" checked />
                                                    <label className="form-check-label" for="inlineCheckbox1" >HTML</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" checked />
                                                    <label className="form-check-label" for="inlineCheckbox2" >CSS</label>
                                                </div>
                                                <div className="form-check form-check-inline">

                                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" checked />
                                                    <label className="form-check-label" for="inlineCheckbox1" >JAVA</label>
                                                </div>
                                                <div className="form-check ">
                                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                                    <label className="form-check-label" for="inlineCheckbox2">C Programming</label>
                                                </div>
                                                <div className="form-check form-check-inline">

                                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                                    <label className="form-check-label" for="inlineCheckbox1">Python</label>
                                                </div>
                                                <div className="form-check ">
                                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                                    <label className="form-check-label" for="inlineCheckbox2">FullStack(MERN & MEAN)</label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-lg-3 control-label">Location:</label>
                                                <div className="col-lg-8">
                                                    <input className="form-control" type="text" value="21/13,Gandhi Street,Chennai" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-lg-3 control-label">Pincode:</label>
                                                <div className="col-lg-8">
                                                    <input className="form-control" type="text" value="600089" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-lg-3 control-label">Phone Number:</label>
                                                <div className="col-lg-8">
                                                    <input className="form-control" type="text" value="9345877375" />
                                                </div>
                                            </div>
                                            <div classNameName="form-group mt-2">
                                                <label>Work Experience</label>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                                                    <label className="form-check-label" for="flexRadioDefault1">Fresher</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                                    <label className="form-check-label" for="flexRadioDefault2">1 Year</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                                    <label className="form-check-label" for="flexRadioDefault2">2 Years</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                                    <label className="form-check-label" for="flexRadioDefault2">Above 2 Years</label>
                                                </div>
                                            </div>
                                           
                                            <div className="form-group">
                                                <label className="col-lg-3 control-label ">Old Password:</label>
                                                <div className="col-lg-8">
                                                    <input className="form-control" type="text" placeholder="*************" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-lg-3 control-label">New Password:</label>
                                                <div className="col-lg-8">
                                                    <input className="form-control" type="text" value="" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-lg-3 control-label">Confirm Password:</label>
                                                <div className="col-lg-8">
                                                    <input className="form-control" type="text" value="" />
                                                </div> 

                                             </div>
                                            <div className=' m-3 '>
                                                <button type="button" className="btn btn-primary  mx-2 w-25" style={{ backgroundColor: "rgb(31, 99, 145)" }}>
                                                    Cancel
                                                </button>
                                                <button type="button" className="btn btn-primary mx-2 w-25" style={{ backgroundColor: "rgb(31, 99, 145)" }}>
                                                    Save
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
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import ComSideBar from "./comsidebar.js"
import Nav from 'react-bootstrap/Nav';
import { Container, Row, Col } from "react-bootstrap"
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

export default function ComUpdateProf() {
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
                                <h1 style={{ color: "rgb(31, 99, 145)" }}>Edit Profile</h1>
                                <hr />
                                <div className="row">

                                    <div className="col-md-3">
                                        <div className="text-center">
                                            <img src="com.jpg" className="avatar img-circle img-thumbnail" alt="avatar" />
                                            <h6>Upload a different photo...</h6>

                                            <input type="file" className="form-control" />
                                        </div>
                                    </div>


                                    <div className="col-md-9 personal-info">
                                        <h3>Professional info</h3>

                                        <form className="form-horizontal" role="form">
                                            <div className="form-group">
                                                <label className="col-lg-3 control-label">Company name:</label>
                                                <div className="col-lg-8">
                                                    <input className="form-control" type="text" value="Texas Infos" />
                                                </div>
                                            </div>
                                            
                                            <div className="form-group">
                                                <label className="col-lg-3 control-label">Email:</label>
                                                <div className="col-lg-8">
                                                    <input className="form-control" type="text" value="texinfo@gmail.com" />
                                                </div>
                                            </div>
                                            

                                           
                                            <div className="form-group">
                                                <label className="col-lg-3 control-label">Location:</label>
                                                <div className="col-lg-8">
                                                    <input className="form-control" type="text" value="5th Street,Circle Avenue,East Banglore,Bangalore" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-lg-3 control-label">Pincode:</label>
                                                <div className="col-lg-8">
                                                    <input className="form-control" type="text" value="612389" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-lg-3 control-label">Phone Number:</label>
                                                <div className="col-lg-8">
                                                    <input className="form-control" type="text" value="9345589375" />
                                                </div>
                                            </div>
                                            
                                            <div className="form-group">
                                                <label className="col-lg-3 control-label">Old Password:</label>
                                                <div className="col-lg-8">
                                                    <input className="form-control" type="text" value="" />
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
                                            <div className='d-inline-flex m-3 p-3'>
                                                <button type="button" className="btn btn-primary btn-lg mx-2" style={{ backgroundColor: "rgb(31, 99, 145)" }}>
                                                    Cancel
                                                </button>
                                                <button type="button" className="btn btn-primary btn-lg mx-2" style={{ backgroundColor: "rgb(31, 99, 145)" }}>
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
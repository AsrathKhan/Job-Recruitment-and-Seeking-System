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

export default function AdminComView() {
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
  const navtoadmincom = () => {
    navigate("/admincom")
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
                  <h1 style={{ color: "rgb(31, 99, 145)" }}>Job Details</h1>
                  <hr />

                  <div className="col-md-12">
                    <div className="table-responsive">
                      <table className="table table-user-information">
                        <tbody>
                          <tr>
                            <td>
                              <strong>
                                <span className="glyphicon glyphicon-envelope text-primary"></span>
                                Company Name
                              </strong>
                            </td>
                            <td className="text-primary">
                              VINFO
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
                              info2v@email.com
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>
                                <span className="glyphicon glyphicon-asterisk text-primary"></span>
                                Job Title
                              </strong>
                            </td>
                            <td className="text-primary">
                              FullStack Developer
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>
                                <span className="glyphicon glyphicon-user  text-primary"></span>
                                Job Type
                              </strong>
                            </td>
                            <td className="text-primary">
                              Full-Time
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>
                                <span className="glyphicon glyphicon-cloud text-primary"></span>
                                Salary Package
                              </strong>
                            </td>
                            <td className="text-primary">
                              55k-60k
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <strong>
                                <span className="glyphicon glyphicon-bookmark text-primary"></span>
                                Job Location
                              </strong>
                            </td>
                            <td className="text-primary">
                              Bangalore
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
                              500362
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className=' my-3'>
                    <button type="reset" class="btn btn-light w-25" onClick={navtoadmincom}>Back </button>
                    <button type="button" class="btn btn-primary w-25" onClick={navtoadmincom} style={{ backgroundColor: "rgb(31, 99, 145)" }}>Delete </button>
                   
                  </div>
                  <hr />
                </div>

              </Col>

            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

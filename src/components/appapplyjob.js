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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AppApplyJob() {
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
  const navtodashapp = () => {
    navigate("/appjobs")
  }
  const navtodashapp1 = () => {
    navigate("/appjobs")

  }
  const notify = () => {
    toast.success('Applied Successfully', {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
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
                    </div>
                    <div className=' my-3 '>
                    <span></span><ToastContainer
                      position="top-right"
                      autoClose={5000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      theme="dark"
                    />
                    <button type="button" class="btn btn-primary w-25 " onClick={notify} style={{ backgroundColor: "rgb(31, 99, 145)" }}>Apply Job</button>
                   
                    <button type="reset" class="btn btn-light w-25 " onClick={navtodashapp}>Back </button>



                  </div>
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

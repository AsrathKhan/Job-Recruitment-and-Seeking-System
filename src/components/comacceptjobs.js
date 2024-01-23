import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import ComSideBar from "./comsidebar.js"
import Nav from 'react-bootstrap/Nav';
import { Container, Row, Col } from "react-bootstrap"
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "./com.css"

export default function ComAcceptJobs() {
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
    const disp=()=>{
        alert("ARE YOU SURE?");
    }
    const navtocomviewdet2 = () => {
        navigate("/comviewdet2");
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
                            <div class="container page-container">
                                <div class="row gutters">
                                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-12">
                                        <figure class="user-card green">
                                            <figcaption>
                                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Milestone Admin" class="profile" />
                                                <h5>Hari Jeyanth</h5>
                                                <ul class="contacts">
                                                    <li>
                                                        <p><strong>Dept:</strong>Computer Science and Engineering</p>
                                                    </li>
                                                    <li>
                                                        <p><strong>Job Title:</strong>Web Development</p>
                                                    </li>
                                                    <li>
                                                        <p><strong>Salary:</strong>25k-45k</p>
                                                    </li>
                                                    <li>
                                                        <p><strong>Job Type:</strong>Fulltime</p>
                                                    </li>
                                                    <li>
                                                        <p><strong>Location:</strong>Chennai</p>
                                                    </li>
                                                    <li>
                                                        <a href="#/">
                                                            herijeyanth@gmail.com
                                                        </a>
                                                    </li>

                                                </ul>
                                                <button type="button" className="btn btn-light btn-sm  btn-lg btn-block text-left" onClick={navtocomviewdet2}>
                                                    View Details
                                                </button>
                                                <button type="button" className=" btn btn-light btn-sm   btn-block text-right ">
                                                    Remove
                                                </button>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-12">
                                        <figure class="user-card blue">
                                            <figcaption>
                                                <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="Milestone Admin" class="profile" />
                                                <h5>Lionel Andre</h5>
                                                <ul class="contacts">
                                                    <li>
                                                        <p><strong>Dept:</strong>Computer Science And Engineering</p>
                                                    </li>
                                                    <li>
                                                        <p><strong>Job Title:</strong>Software Development</p>
                                                    </li>
                                                    <li>
                                                        <p><strong>Salary:</strong>50k-60k</p>
                                                    </li>
                                                    <li>
                                                        <p><strong>Job Type:</strong>Fulltime</p>
                                                    </li>
                                                    <li>
                                                        <p><strong>Location:</strong>Chennai</p>
                                                    </li>
                                                    <li>
                                                        <a href="#/">
                                                            LioAndre@gmail.com
                                                        </a>
                                                    </li>

                                                </ul>
                                                <button type="button" className="btn btn-light btn-sm  btn-lg btn-block text-left " onClick={navtocomviewdet2}>
                                                    View Details
                                                </button>
                                                <button type="button" className=" btn btn-light btn-sm   btn-block text-right " >
                                                    Remove
                                                </button>

                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-12">
                                        <figure class="user-card pink">
                                            <figcaption>
                                                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="Milestone Admin" class="profile" />
                                                <h5> Priya</h5>
                                                <ul class="contacts">
                                                    <li>
                                                        <p><strong>Dept:</strong>Computer Science And Engineering</p>
                                                    </li>
                                                    <li>
                                                        <p><strong>Job Title:</strong>FulStack Development</p>
                                                    </li>
                                                    <li>
                                                        <p><strong>Salary:</strong>20k-35k</p>
                                                    </li>
                                                    <li>
                                                        <p><strong>Job Type:</strong>Fulltime</p>
                                                    </li>
                                                    <li>
                                                        <p><strong>Location:</strong>Bangalore</p>
                                                    </li>
                                                    <li>
                                                        <a href="#/">
                                                            priya321@gmail.com
                                                        </a>
                                                    </li>
                                                   

                                                </ul>
                                                <button type="button" className="btn btn-light btn-sm  btn-lg btn-block text-left " onClick={navtocomviewdet2}>
                                                    View Details
                                                </button>
                                                <button type="button" className=" btn btn-light btn-sm   btn-block text-right " >
                                                    Remove
                                                </button>
                                                
                                            </figcaption>
                                        </figure>
                                    </div>


                                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-12">
                                        <figure class="user-card green">
                                            <figcaption>
                                                <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Milestone Admin" class="profile" />
                                                <h5>Jeeva</h5>
                                                <ul class="contacts">
                                                    <li>
                                                        <p><strong>Dept:</strong>Electronics and Communication Engineering</p>
                                                    </li>
                                                    <li>
                                                        <p><strong>Job Title:</strong>Web Designing</p>
                                                    </li>
                                                    <li>
                                                        <p><strong>Salary:</strong>10k-20k</p>
                                                    </li>
                                                    <li>
                                                        <p><strong>Job Type:</strong>PartTime</p>
                                                    </li>
                                                    <li>
                                                        <p><strong>Location:</strong>Mumbai</p>
                                                    </li>
                                                    <li>
                                                        <a href="#/">
                                                            just10fran@gmail.com
                                                        </a>
                                                    </li>

                                                </ul>
                                                <button type="button" className="btn btn-light btn-sm  btn-lg btn-block text-left " onClick={navtocomviewdet2}>
                                                    View Details
                                                </button>
                                                <button type="button" className=" btn btn-light btn-sm   btn-block text-right " >
                                                    Remove
                                                </button>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-12">
                                        <figure class="user-card red">
                                            <figcaption>
                                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Milestone Admin" class="profile" />
                                                <h5>Aravindh</h5>
                                                <ul class="contacts">
                                                    <li>
                                                        <p><strong>Dept:</strong>Computer Science And Engineering</p>
                                                    </li>
                                                    <li>
                                                        <p><strong>Job Title:</strong>web Development</p>
                                                    </li>
                                                    <li>
                                                        <p><strong>Salary:</strong>20k-35k</p>
                                                    </li>
                                                    <li>
                                                        <p><strong>Job Type:</strong>Fulltime</p>
                                                    </li>
                                                    <li>
                                                        <p><strong>Location:</strong>Bangalore</p>
                                                    </li>
                                                    <li>
                                                        <a href="#/">
                                                            aravindh10@gmail.com
                                                        </a>
                                                    </li>

                                                </ul>
                                                <button type="button" className="btn btn-light btn-sm  btn-lg btn-block text-left " onClick={navtocomviewdet2}>
                                                    View Details
                                                </button>
                                                <button type="button" className=" btn btn-light btn-sm   btn-block text-right " >
                                                    Remove
                                                </button>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-12">
                                        <figure class="user-card orange">
                                            <figcaption>
                                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Milestone Admin" class="profile" />
                                                <h5>Sanjay</h5>
                                                <ul class="contacts">
                                                    <li>
                                                        <p><strong>Dept:</strong>Information Technology</p>
                                                    </li>
                                                    <li>
                                                        <p><strong>Job Title:</strong>FulStack Development</p>
                                                    </li>
                                                    <li>
                                                        <p><strong>Salary:</strong>60k-70k</p>
                                                    </li>
                                                    <li>
                                                        <p><strong>Job Type:</strong>Fulltime</p>
                                                    </li>
                                                    <li>
                                                        <p><strong>Location:</strong>Chennai</p>
                                                    </li>
                                                    <li>
                                                        <a href="#/">
                                                            231sanjay@gmail.com
                                                        </a>
                                                    </li>

                                                </ul>
                                                <button type="button" className="btn btn-light btn-sm  btn-lg btn-block text-left " onClick={navtocomviewdet2}>
                                                    View Details
                                                </button>
                                                <button type="button" className=" btn btn-light btn-sm   btn-block text-right " >
                                                    Remove
                                                </button>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-12">
                                        <figure class="user-card teal">
                                            <figcaption>
                                                <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="Milestone Admin" class="profile" />
                                                <h5>Karthick</h5>
                                                <ul class="contacts">
                                                    <li>
                                                        <p><strong>Dept:</strong>Computer Science And Engineering</p>
                                                    </li>
                                                    <li>
                                                        <p><strong>Job Title:</strong>FulStack Development</p>
                                                    </li>
                                                    <li>
                                                        <p><strong>Salary:</strong>20k-35k</p>
                                                    </li>
                                                    <li>
                                                        <p><strong>Job Type:</strong>Fulltime</p>
                                                    </li>
                                                    <li>
                                                        <p><strong>Location:</strong>Chennai</p>
                                                    </li>
                                                    <li>
                                                        <a href="#/">
                                                            karthi2003@gmail.com
                                                        </a>
                                                    </li>

                                                </ul>
                                                <button type="button" className="btn btn-light btn-sm  btn-lg btn-block text-left " onClick={navtocomviewdet2}>
                                                    View Details
                                                </button>
                                                <button type="button" className=" btn btn-light btn-sm   btn-block text-right " >
                                                    Remove
                                                </button>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-12">
                                        <figure class="user-card gp">
                                            <figcaption>
                                                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="Milestone Admin" class="profile" />
                                                <h5>Jasmine</h5>
                                                <ul class="contacts">
                                                    <li>
                                                        <p><strong>Dept:</strong>Electronics and Communication Engineering</p>
                                                    </li>
                                                    <li>
                                                        <p><strong>Job Title:</strong>Software Development</p>
                                                    </li>
                                                    <li>
                                                        <p><strong>Salary:</strong>80k-85k</p>
                                                    </li>
                                                    <li>
                                                        <p><strong>Job Type:</strong>Fulltime</p>
                                                    </li>
                                                    <li>
                                                        <p><strong>Location:</strong>Mumbai</p>
                                                    </li>
                                                    <li>
                                                        <a href="#/">
                                                            jasmine123@gmail.com
                                                        </a>
                                                    </li>

                                                </ul>
                                                <button type="button" className="btn btn-light btn-sm  btn-lg btn-block text-left " onClick={navtocomviewdet2}>
                                                    View Details
                                                </button>
                                                <button type="button" className=" btn btn-light btn-sm   btn-block text-right " >
                                                    Remove
                                                </button>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-12">
                                        <figure class="user-card blue">
                                            <figcaption>
                                                <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="Milestone Admin" class="profile" />
                                                <h5>Dhanush</h5>
                                                <ul class="contacts">
                                                    <li>
                                                        <p><strong>Dept:</strong>Computer Science And Engineering</p>
                                                    </li>
                                                    <li>
                                                        <p><strong>Job Title:</strong>FulStack Development</p>
                                                    </li>
                                                    <li>
                                                        <p><strong>Salary:</strong>20k-35k</p>
                                                    </li>
                                                    <li>
                                                        <p><strong>Job Type:</strong>Fulltime</p>
                                                    </li>
                                                    <li>
                                                        <p><strong>Location:</strong>Bangalore</p>
                                                    </li>
                                                    <li>
                                                        <a href="#/">
                                                            dhanush789@gmail.com
                                                        </a>
                                                    </li>

                                                </ul>
                                                <button type="button" className="btn btn-light btn-sm  btn-lg btn-block text-left "onClick={navtocomviewdet2} >
                                                    View Details
                                                </button>
                                                <button type="button" className=" btn btn-light btn-sm   btn-block text-right " >
                                                    Remove
                                                </button>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-12">
                                        <figure class="user-card orange">
                                            <figcaption>
                                                <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="Milestone Admin" class="profile" />
                                                <h5>Abdul Hameed</h5>
                                                <ul class="contacts">
                                                    <li>
                                                        <p><strong>Dept:</strong>Computer Science And Engineering</p>
                                                    </li>
                                                    <li>
                                                        <p><strong>Job Title:</strong>Web Designing</p>
                                                    </li>
                                                    <li>
                                                        <p><strong>Salary:</strong>30k-40k</p>
                                                    </li>
                                                    <li>
                                                        <p><strong>Job Type:</strong>Fulltime</p>
                                                    </li>
                                                    <li>
                                                        <p><strong>Location:</strong>Chennai</p>
                                                    </li>
                                                    <li>
                                                        <a href="#/">
                                                            abhameed@gmail.com
                                                        </a>
                                                    </li>

                                                </ul>
                                                <button type="button" className="btn btn-light btn-sm  btn-lg btn-block text-left " onClick={navtocomviewdet2}>
                                                    View Details
                                                </button>
                                                <button type="button" className=" btn btn-light btn-sm   btn-block text-right " >
                                                    Remove
                                                </button>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </>
    )
}
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import SideBar from "./adminsidebar.js"
import Nav from 'react-bootstrap/Nav';
import { Container, Row, Col } from "react-bootstrap"
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
export default function AdminJob() {
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
    const navtoadminappview = () => {
        navigate("/adminappview");
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
                        <SideBar />
                    </Col>
                    <Col>
                        <form className=' justify-content-start '>
                            <input type="text" className="border-color-primary w-100 h-3 my-3" placeholder='Search applicants/recruiters'></input>
                        </form>
                        <div>
                            <div class="container">
                                <div class="main-body">

                                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gutters-sm">
                                        <div class="col mb-3">
                                            <div class="card">
                                               
                                                <div class="card-body text-center">
                                                    <img
                                                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                                        alt="User"
                                                        class="img-fluid img-thumbnail rounded-circle border-0 mb-3"
                                                    />
                                                    <h5 class="card-title">Ram Kumar</h5>
                                                    <p class="text-secondary mb-1">Software Developer</p>
                                                    <p class="text-muted font-size-sm">
                                                        2nd Avenue,East Coast Road,Chennai
                                                    </p>
                                                </div>
                                                <div class="card-footer">
                                                    <button
                                                        type="button"
                                                        className="btn btn-light btn-sm bg-white btn-lg btn-block text-left"
                                                        onClick={navtoadminappview}
                                                    >
                                                        View Details
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-light btn-sm bg-white  btn-block text-right"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col mb-3">
                                            <div class="card">
                                               
                                                <div class="card-body text-center">
                                                    <img
                                                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                        alt="User"
                                                        class="img-fluid img-thumbnail rounded-circle border-0 mb-3"
                                                    />
                                                    <h5 class="card-title">John Doe</h5>
                                                    <p class="text-secondary mb-1">Full Stack Developer</p>
                                                    <p class="text-muted font-size-sm">
                                                        2nd Street,Bangalore East,Bangalore.
                                                    </p>
                                                </div>
                                                <div class="card-footer">
                                                    <button
                                                        type="button"
                                                        className="btn btn-light btn-sm bg-white btn-lg btn-block text-left"
                                                        onClick={navtoadminappview}
                                                    >
                                                        View Details
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-light btn-sm bg-white  btn-block text-right"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col mb-3">
                                            <div class="card">
                                              
                                                <div class="card-body text-center">
                                                    <img
                                                        src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                        alt="User"
                                                        class="img-fluid img-thumbnail rounded-circle border-0 mb-3"
                                                    />
                                                    <h5 class="card-title">Kishore</h5>
                                                    <p class="text-secondary mb-1">Web Designer</p>
                                                    <p class="text-muted font-size-sm">
                                                        388 Circle,Nehru Street,Bangalore
                                                    </p>
                                                </div>
                                                <div class="card-footer">
                                                    <button
                                                        type="button"
                                                        className="btn btn-light btn-sm bg-white btn-lg btn-block text-left"
                                                        onClick={navtoadminappview}
                                                    >
                                                        View Details
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-light btn-sm bg-white  btn-block text-right"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col mb-3">
                                            <div class="card">
                                               
                                                <div class="card-body text-center">
                                                    <img
                                                        src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                        alt="User"
                                                        class="img-fluid img-thumbnail rounded-circle border-0 mb-3"
                                                    />
                                                    <h5 class="card-title">Jessi</h5>
                                                    <p class="text-secondary mb-1">Full Stack Developer</p>
                                                    <p class="text-muted font-size-sm">
                                                        Bay Area,RockBeach Avenue,Mumbai
                                                    </p>
                                                </div>
                                                <div class="card-footer">
                                                    <button
                                                        type="button"
                                                        className="btn btn-light btn-sm bg-white btn-lg btn-block text-left"
                                                        onClick={navtoadminappview}
                                                    >
                                                        View Details
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-light btn-sm bg-white  btn-block text-right"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col mb-3">
                                            <div class="card">
                                              
                                                <div class="card-body text-center">
                                                    <img
                                                        src="https://bootdey.com/img/Content/avatar/avatar4.png"
                                                        alt="User"
                                                        class="img-fluid img-thumbnail rounded-circle border-0 mb-3"
                                                    />
                                                    <h5 class="card-title">Lionel John </h5>
                                                    <p class="text-secondary mb-1">Full Stack Developer</p>
                                                    <p class="text-muted font-size-sm">
                                                        3rd Street,Ashok Pillar,Chennai
                                                    </p>
                                                </div>
                                                <div class="card-footer">
                                                    <button
                                                        type="button"
                                                        className="btn btn-light btn-sm bg-white btn-lg btn-block text-left"
                                                        onClick={navtoadminappview}
                                                    >
                                                        View Details
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-light btn-sm bg-white  btn-block text-right"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col mb-3">
                                            <div class="card">
                                                
                                                <div class="card-body text-center">
                                                    <img
                                                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                        alt="User"
                                                        class="img-fluid img-thumbnail rounded-circle border-0 mb-3"
                                                    />
                                                    <h5 class="card-title">Will Smith</h5>
                                                    <p class="text-secondary mb-1">Web Developer</p>
                                                    <p class="text-muted font-size-sm">
                                                        Park Road,T Nagar,Chennai
                                                    </p>
                                                </div>
                                                <div class="card-footer">
                                                    <button
                                                        type="button"
                                                        className="btn btn-light btn-sm bg-white btn-lg btn-block text-left"
                                                        onClick={navtoadminappview}
                                                    >
                                                        View Details
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-light btn-sm bg-white  btn-block text-right"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col mb-3">
                                            <div class="card">
                                              
                                                <div class="card-body text-center">
                                                    <img
                                                        src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                        alt="User"
                                                        class="img-fluid img-thumbnail rounded-circle border-0 mb-3"
                                                    />
                                                    <h5 class="card-title">Gobinath</h5>
                                                    <p class="text-secondary mb-1">Web Developer</p>
                                                    <p class="text-muted font-size-sm">
                                                        3rd Street,Ashok Pillar,Chennai
                                                    </p>
                                                </div>
                                                <div class="card-footer">
                                                    <button
                                                        type="button"
                                                        className="btn btn-light btn-sm bg-white btn-lg btn-block text-left"
                                                        onClick={navtoadminappview}
                                                    >
                                                        View Details
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-light btn-sm bg-white  btn-block text-right"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col mb-3">
                                            <div class="card">
                                                
                                                <div class="card-body text-center">
                                                    <img
                                                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                        alt="User"
                                                        class="img-fluid img-thumbnail rounded-circle border-0 mb-3"
                                                    />
                                                    <h5 class="card-title">Jeeva</h5>
                                                    <p class="text-secondary mb-1">Full Stack Developer</p>
                                                    <p class="text-muted font-size-sm">
                                                        2nd Road,WestCoast Area,Mumbai
                                                    </p>
                                                </div>
                                                <div class="card-footer">
                                                    <button
                                                        type="button"
                                                        className="btn btn-light btn-sm bg-white btn-lg btn-block text-left"
                                                        onClick={navtoadminappview}
                                                    >
                                                        View Details
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-light btn-sm bg-white  btn-block text-right"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
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
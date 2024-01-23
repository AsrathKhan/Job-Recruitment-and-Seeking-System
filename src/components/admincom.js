import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import SideBar from "./adminsidebar.js"
import Nav from 'react-bootstrap/Nav';
import { Container, Row, Col } from "react-bootstrap"
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "./admincom.css"


export default function AdminCom() {
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
    const navtoadmincomview = () => {
        navigate("/admincomview");
    };
    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        {/* <div classNameName="container-fluid bg-white min-vh-100" > */}
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
                            <input type="text" className="border-color-primary  w-100 h-3 my-3" placeholder='Search applicants/recruiters'></input>
                        </form>


                        <div>
                            <link
                                href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
                                rel="stylesheet"
                            />
                            <div className="container">
                                <div className="directory-info-row">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6">
                                            <div className="panel m-2 p-2">
                                                <div className="panel-body">
                                                    <div className="media">
                                                        <a className="pull-left" href="#/">
                                                            <img
                                                                className="thumb media-object"
                                                                src="building1.jpg"
                                                                alt="company"
                                                            />
                                                        </a>
                                                        <div className="media-body">
                                                            <h3>
                                                                <strong>VINFO</strong>
                                                            </h3>

                                                            <address>
                                                                Vamoil Ave, Suite 23
                                                                <br />
                                                                Dream land,
                                                                <br />
                                                                Bangalore <br />
                                                                <strong>infov@gmail.com</strong>
                                                            </address>
                                                            <button
                                                                type="button"
                                                                className="btn btn-light btn-sm bg-white btn-lg btn-block text-left"
                                                                onClick={navtoadmincomview}
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

                                        <div className="col-md-6 col-sm-6">
                                            <div className="panel m-2 p-2">
                                                <div className="panel-body">
                                                    <div className="media">
                                                        <a className="pull-left" href="#/">
                                                            <img
                                                                className="thumb media-object"
                                                                src="building1.jpg"
                                                                alt="company"
                                                            />
                                                        </a>
                                                        <div className="media-body">
                                                            <h3>
                                                                <strong>AGROBEE</strong>
                                                            </h3>

                                                            <address>
                                                                Holland Street,
                                                                <br />
                                                                Coast road,
                                                                <br />
                                                                Mumbai <br />
                                                                <strong>agrobeebee@gmail.com</strong>
                                                            </address>

                                                            <button
                                                                type="button"
                                                                className="btn btn-light btn-sm bg-white btn-lg btn-block text-left"
                                                                onClick={navtoadmincomview}
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

                                    <div className="row">
                                        <div className="col-md-6 col-sm-6">
                                            <div className="panel m-2 p-2">
                                                <div className="panel-body">
                                                    <div className="media">
                                                        <a className="pull-left" href="#/">
                                                            <img
                                                                className="thumb media-object"
                                                                src="building1.jpg"
                                                                alt="company"
                                                            />
                                                        </a>
                                                        <div className="media-body">
                                                            <h3>
                                                                <strong>GOODPU</strong>
                                                            </h3>

                                                            <address>
                                                                Richie Street, Suite 03,
                                                                <br />
                                                                Bangalore East,
                                                                <br />
                                                                Bangalore <br />
                                                                <strong>good4pu@gmail.com</strong>
                                                            </address>
                                                            <button
                                                                type="button"
                                                                className="btn btn-light btn-sm bg-white  btn-block text-left"
                                                                onClick={navtoadmincomview}
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

                                        <div className="col-md-6 col-sm-6">
                                            <div className="panel m-2 p-2">
                                                <div className="panel-body">
                                                    <div className="media">
                                                        <a className="pull-left" href="#/">
                                                            <img
                                                                className="thumb media-object"
                                                                src="building1.jpg"
                                                                alt="company"
                                                            />
                                                        </a>
                                                        <div className="media-body">
                                                            <h3>
                                                                <strong>DOINFO</strong>
                                                            </h3>

                                                            <address>
                                                                Fun Street,Suite 15,
                                                                <br />
                                                                SIDCO,
                                                                <br />
                                                                Chennai <br />
                                                                <strong>doinfo100@gmail.com</strong>
                                                            </address>
                                                            <button
                                                                type="button"
                                                                className="btn btn-light btn-sm bg-white btn-lg btn-block text-left"
                                                                onClick={navtoadmincomview}
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
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
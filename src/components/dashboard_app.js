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
export default function AdminDashboard() {
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
  const navtoapply=()=>{
    navigate("/appapply")
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
      
          </Col>
        </Row>
        <Row>
          <Col lg={2}>
            <AppSideBar />
          </Col>
          <Col>
            <h3 className='pb-3'><strong>Hello Applicant...</strong></h3><h5>Suggestions For You..</h5><br></br>
            <div>
              <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
              <div class="container">
                <div class="row">
                  <div class="col-md-4 col-xl-3">
                    <div class="card bg-c-blue order-card">
                      <div class="card-block">
                        <h6 class="m-b-20">Applied Jobs</h6>
                        <h2 class="text-right"><i className="fa fa-archive f-left m-2"></i><span className='m-2'>20</span></h2>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-4 col-xl-3">
                    <div class="card bg-c-green order-card">
                      <div class="card-block">
                        <h6 class="m-b-20">Accepted Requests</h6>
                        <h2 class="text-right"><i className="fa fa-star f-left m-2"></i><span className='m-2'>12</span></h2>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-4 col-xl-3">
                    <div class="card bg-c-yellow order-card">
                      <div class="card-block">
                        <h6 class="m-b-20">Available Jobs</h6>
                        <h2 class="text-right"><i className="fa fa-bars f-left m-2"></i><span className='m-2'>258</span></h2>
                      </div>
                    </div>
                  </div>

                  
                </div>
              </div>
            </div>
            <div className='d-inline-flex'>
              <Card style={{ width: '18rem' }} className='p-2 m-2'>
                <Card.Img variant="top" src="comimg.png" />
                <Card.Body>
                  <Card.Title><strong>VINFO</strong></Card.Title>
                  <Card.Text>
                    <p>6th Avenue,East Street,<br></br>Adyar,Chennai<br></br>600025</p>
                  </Card.Text>
                  <Button variant="primary bn" style={{ backgroundColor: "rgb(31, 99, 145)" }} onClick={navtoapply}>Apply Job</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem' }} className='p-2 m-2'>
                <Card.Img variant="top" src="comimg.png" />
                <Card.Body>
                  <Card.Title><strong>ZOHO</strong></Card.Title>
                  <Card.Text>
                    <p>6th Avenue,4th Street,<br></br>Tambaram,Chennai<br></br>600025</p>
                  </Card.Text>
                  <Button variant="primary bn" style={{ backgroundColor: "rgb(31, 99, 145)" }} onClick={navtoapply}>Apply Job</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem' }} className='p-2 m-2'>
                <Card.Img variant="top" src="comimg.png" />
                <Card.Body>
                  <Card.Title><strong>INFOSIS</strong></Card.Title>
                  <Card.Text>
                    <p> Tamarind, 123 Uttarahalli Road<br></br>Bangalore South,Bangalore<br></br>560062</p>
                  </Card.Text>
                  <Button variant="primary bn" style={{ backgroundColor: "rgb(31, 99, 145)" }} onClick={navtoapply}>Apply Job</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem' }} className='p-2 m-2'>
                <Card.Img variant="top" src="comimg.png" />
                <Card.Body>
                  <Card.Title><strong>AGROBEE</strong></Card.Title>
                  <Card.Text>
                    <p>10 Bangalore-Mysore Road<br></br>Bangalore South,Bengaluru<br></br> 560039</p>
                  </Card.Text>
                  <Button variant="primary bn" style={{ backgroundColor: "rgb(31, 99, 145)" }} onClick={navtoapply}>Apply Job</Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
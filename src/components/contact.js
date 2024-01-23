import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate} from "react-router-dom";
import "./about.css"
export default function Contact()
{
    const navigate=useNavigate();
   const navtohome=()=>{
     navigate("/");
   };
   const navtoabout=()=>{
     navigate("/about");
   }
   const navtocontact=()=>{
     navigate("/contact");
   };
   return(
   <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/" style={{color:"rgb(31, 99, 145)"}}><h1>Jobistics</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav " className='justify-content-end'>
          <Nav>
            <Nav.Link href="/" onClick={navtohome} className='fw-bold'>Home</Nav.Link>
            <Nav.Link href="/about" onClick={navtoabout} className='fw-bold'>About</Nav.Link>
            <Nav.Link href="/contact" onClick={navtocontact} className='fw-bold'>Contact</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <br></br>
    <div>
      <section className='p-4 back'>
            <div className='container'>
              <div className='row m'>
                <div className='col-md-4 my-auto'>
                  <h4>CONTACT US</h4>
                </div>
              </div>
            </div>
      </section>
      <br></br>
      <section className='section'>
        <div className='container'>
          <div className='card shadow'>
            <div className='card body'>
              <div className='row'>
                <div className='col-md-6 border-right mt-2 '>
                  <h5 className='ms-3'>Contact Form</h5>
                  <hr/>
                  <div className='form-group'>
                    <label className="mb-2 ms-1">Full Name</label>
                    <input type="text" className='form-control' name="" placeholder='Enter Full Name'/>
                  </div>
                  <div className='form-group'>
                    <label className="mb-2 ms-1">Phone Number</label>
                    <input type="text" className='form-control' name="" placeholder='Enter Phone Number'/>
                  </div>
                  <div className='form-group'>
                    <label className="mb-2 ms-1">Email Address</label>
                    <input type="text" className='form-control' name="" placeholder='Enter Email'/>
                  </div>
                  <div className='form-group'>
                    <label className="mb-2 ms-1">Message</label>
                    <textarea rows="3" className='form-control' name="" placeholder='Enter Your Message...'/>
                  </div>
                  <div className='form-group mb-2'>
                    <button type="button" className='btn btn-primary shadow w-100' style={{backgroundColor:"rgb(31, 99, 145)"}} >Send Message</button>
                  </div>
                </div>
                <div className="col-md-6 border-start mt-2">
                  <h5 className='main-heading'>Address Info</h5>
                  <div className='underline'></div>
                  <p>
                    XXX,<br></br>West Street,<br></br>Chennai TamilNadu - 600031,<br></br>INDIA
                  </p>
                  <p>
                    Phone:+91 9080XXXXXX
                  </p>
                  <p>
                    Email:adminemail@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    

    </>
   )
}
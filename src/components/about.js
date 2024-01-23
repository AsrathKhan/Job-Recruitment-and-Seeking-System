import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate} from "react-router-dom";
import "./about.css"
export default function About()
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
        <div className='Container-fluid'>
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
         </div>
         
       
         <br></br>
         <div>
          <section className='py-4 back'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-4 my-auto'>
                  <h4>ABOUT US</h4>
                </div>
              </div>
            </div>
          </section>
          <br></br>
          <section className='section bg-light border-bottom'>
            <div className='container'>
              <h5 className=''>OUR SITE</h5>
              <div className='underline'></div>
              <p>
              Jobistics is the most innovative and second largest online job portal in India.Jobistics has become a prominent name in the recruitment 
          industry. The popularity of the portal is evident from the fact that it has crossed the 3.4 crore candidate landmark and has more than 3 
          lakh latest job vacancies from leading companies on the site.Jobistics connects jobseekers and recruiters by accurately matching candidate
          profiles to the relevant job openings through an advanced 2-way matching technology. While most job portals only focus on getting candidates
          the next job, Jobistics focuses on the entire career growth of candidates.Jobistics works closely to bridge the gap between talent & opportunities and offers end-to-end 
          recruitment solutions. Jobistics Job Fair brings candidates and top employers under one roof. While Jobistics HR Conclave brings top HR leaders to 
          share insights on latest trends, innovations & best practices in the HR industry. Jobistics also has a large reach through its print product, 
          Jobistics Jobs – the Tuesday Job supplement of Hindustan Times– making it the only job portal with an integrated print and online offering.
              </p>
            </div>
          </section>
         </div>
         </>
        )
    
}
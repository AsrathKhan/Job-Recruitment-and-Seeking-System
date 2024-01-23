import "./sign.css"
import "bootstrap/dist/css/bootstrap.min.css"
// import App from "./src/App.js"
import React from "react"

import {useNavigate} from "react-router-dom";


export default function AdminSignin(props) {
  
 
  const navigate=useNavigate();
  const navtodashadmin=()=>
  {
    navigate("/dashadmin");
  };
   return (
      
      <>
      <div className="Auth-form-container">
      <p className="head2">GET ACCESS TO THE <br></br>
        <p className="head2">JOB PORTAL</p></p>
        <form className="Auth-form">
          <img className="img" src="Logo.png" alt="Logo"/>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In-<span >Administrator</span></h3>
            <div className="form-group mt-3">
              <label >Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label >Phone Number</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Phone Number"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" style={{backgroundColor:"rgb(31, 99, 145)"}} onClick={navtodashadmin}>
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
      </>
    )
  }
   
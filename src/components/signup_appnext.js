import "./sign.css"
import "bootstrap/dist/css/bootstrap.min.css"
// import App from "./src/App.js"
import {useNavigate} from "react-router-dom";
import React from "react"
export default function AppNextSignup(){
    const navigate=useNavigate();
    const navtosignin=()=>{
        navigate("/signin");
    }
return (
    <div className="Auth-form-container">
      <form className="Auth-form2 " >
      <img className="img" src="Logo.png" alt="Logo"/>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up-<span>Applicant</span></h3>
          <div class="row">
            <div class="col">
              <label>Location</label>
              <input type="text" class="form-control" placeholder="Location"/>
            </div>
            <div class="col">
             <label>Pincode</label>
             <input type="text" class="form-control" placeholder="Pincode"/>
            </div>
         </div>
         <div className="form-group mt-2">
            <label>Phone Number</label>
            <input type="email" className="form-control mt-1" placeholder="Phone Number"/>
          </div>
          <div className="form-group mt-2">
            <label>Work Experience</label>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
              <label class="form-check-label" for="flexRadioDefault1">Fresher</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
              <label class="form-check-label" for="flexRadioDefault2">1 Year</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
              <label class="form-check-label" for="flexRadioDefault2">2 Years</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
              <label class="form-check-label" for="flexRadioDefault2">Above 2 Years</label>
            </div>
          </div>
          <div className="form-group mt-2">
            <label>Create New Password</label>
            <input type="email" className="form-control mt-1" placeholder="Enter New Password"/>
          </div>
          <div className="form-group mt-2">
            <label>Confirm Password</label>
            <input type="email" className="form-control mt-1" placeholder="Re-Enter Password"/>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" style={{backgroundColor:"rgb(31, 99, 145)"}} onClick={navtosignin}>
              Submit
            </button>
          </div>
          <br></br>
          <div className="text-center">
            Already have account?{" "}
            <span className="link-primary" onClick={navtosignin}>    
              Sign In
            </span>
          </div>

        </div>
      </form>
    </div>
  )
}
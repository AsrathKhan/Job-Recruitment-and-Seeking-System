import "./sign.css"
import "bootstrap/dist/css/bootstrap.min.css"
// import App from "./src/App.js"
import {useNavigate} from "react-router-dom";
import React from "react"


export default function ComSignup(){

    const navigate=useNavigate();
    const navtosignincom=()=>{
        navigate("/signincom");
    }
return (
    <div className="Auth-form-container">
      <form className="Auth-form2 " >
      <img className="img" src="Logo.png" alt="Logo"/>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up-<span>Recruiter</span></h3>
          <div className="form-group mt-2">
            <label>Company Name</label>
            <input type="email" className="form-control mt-1" placeholder="Company Name"/>
          </div>
          <div className="form-group mt-2">
            <label>Email</label>
            <input type="email" className="form-control mt-1" placeholder="Enter Email"/>
          </div>
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
            <label>Create New Password</label>
            <input type="email" className="form-control mt-1" placeholder="Enter New Password"/>
          </div>
          <div className="form-group mt-2">
            <label>Confirm Password</label>
            <input type="email" className="form-control mt-1" placeholder="Re-Enter Password"/>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" style={{backgroundColor:"rgb(31, 99, 145)"}} onClick={navtosignincom}>
              Submit
            </button>
          </div>
          <br></br>
          <div className="text-center">
            Already have account?{" "}
            <span className="link-primary" onClick={navtosignincom}>    
              Sign In
            </span>
          </div>

        </div>
      </form>
    </div>
  )
}




import "./sign.css"
import "bootstrap/dist/css/bootstrap.min.css"
// import App from "./src/App.js"
import {useNavigate} from "react-router-dom";
import React from "react"
export default function AppSignup(){
    const navigate=useNavigate();
    const navtosignupnext=()=>{
        navigate("/signupnext");
    }
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
            <label>First Name</label>
             <input type="text" class="form-control" placeholder="First name"/>
             
            </div>
            <div class="col">
            <label>Last Name</label>
             <input type="text" class="form-control" placeholder="Last name"/>
            </div>
         </div>
         <div className="form-group mt-2">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div class="form-group mt-2">
           <label >Degree</label>
            <select class="form-control" >
              <option>Bachelor of Engineering</option>
              <option>Master of Engineering</option>
              <option>Diploma</option>
              <option>Bachelor of Arts</option>
              <option>Master of Arts</option>
              <option>Doctor of Philosophy</option>
            </select>
           </div>
          <div className="form-group mt-2">
            <label>Department</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Department"
            />
          </div>
          <label className="mt-2 mb-2">Skills</label>
          <div class="form-check ">
           
             <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
             <label class="form-check-label" for="inlineCheckbox1">HTML</label>
          </div>
          <div class="form-check form-check-inline">
             <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
             <label class="form-check-label" for="inlineCheckbox2">CSS</label>
          </div>
          <div class="form-check form-check-inline">
           
           <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
           <label class="form-check-label" for="inlineCheckbox1">JAVA</label>
        </div>
        <div class="form-check form-check-inline">
           <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
           <label class="form-check-label" for="inlineCheckbox2">C Programming</label>
        </div>
        <div class="form-check form-check-inline">
           
           <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
           <label class="form-check-label" for="inlineCheckbox1">Python</label>
        </div>
        <div class="form-check form-check-inline">
           <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
           <label class="form-check-label" for="inlineCheckbox2">FullStack(MERN & MEAN)</label>
        </div>
          <div class="form-group mt-2">
             <label >Upload Resume</label>
             <input type="file" class="form-control-file mt-2" />
           </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" style={{backgroundColor:"rgb(31, 99, 145)"}} onClick={navtosignupnext}>
              Next
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

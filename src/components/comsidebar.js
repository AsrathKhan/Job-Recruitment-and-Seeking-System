import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
export default function ComSideBar() {
  const navigate = useNavigate();
 
  const navtohome = () => {
    navigate("/");
  };
  const navtocomdash=()=>{
    navigate("/dashcom")
  }
  const navtocomacceptedjobs = () => {
    navigate("/comacceptjobs");
  }; 
  const navtocomaddjobs = () => {
    navigate("/comaddjobs");
  }; 
  const navtocomupdateprof=()=>
  {                  
    navigate("/comupdateprof");
  };
  const navtocomapplicants=()=>
  {
    navigate("./comapplicants")
  };                                                                                                       
  return (
    <div className="bg-white sidebar p-2  h-100">
      <div className="m-2">
        <i className=" me-3 fs-4"></i>
        <span className="brand-name fs-4"></span>
      </div>
      <hr className="text-dark" />
      <div className="list-group list-group-flush">
        <a className="list-group-item py-2 ">
          <i className="bi bi-speedometer2 fs-5 me-3"></i>
          <span onClick={navtocomdash} className="fs-5">Dashboard</span>
        </a>
        {/* <a className="list-group-item py-2 ">
          <i className="bi bi-person-fill fs-5 me-3"></i>
          <span onClick={navtocomapplicants} className="fs-5">Applicants</span>
        </a> */}
        <a className="list-group-item py-2 ">
          <i className="bi bi-plus-circle-fill fs-5 me-3"></i>
          <span onClick={navtocomaddjobs} className="fs-5">Add Jobs</span>
        </a>
        <a className="list-group-item py-2">
          <i className="bi bi-check-square-fill fs-5 me-3"></i>
          <span onClick={navtocomacceptedjobs} className="fs-5">Accepted Jobs</span>
        </a>
        <a className="list-group-item py-2">
          <i className="bi bi-person-circle fs-5 me-3"></i>
          <span onClick={navtocomupdateprof} className="fs-5">Update Profile</span>
        </a>
        <a className="list-group-item py-2">
          <i className="bi bi-power fs-5 me-3"></i>
          <span onClick={navtohome} className="fs-5">SignOut</span>
        </a>
      </div>
    </div>
  );
}
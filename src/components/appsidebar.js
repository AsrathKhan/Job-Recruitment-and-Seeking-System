import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
export default function AppSideBar() {
  const navigate = useNavigate();
 
  const navtohome = () => {
    navigate("/");
  };
  const navtodashapp=()=>{
    navigate("/dash")
  }
  const navtoappappliedjobs = () => {
    navigate("/appappliedjobs");
  }; 
  const navtoappjobs = () => {
    navigate("/appjobs");
  }; 
  const navtoappupdateprof=()=>
  {
    navigate("/appupdateprof");
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
          <span onClick={navtodashapp} className="fs-5">Dashboard</span>
        </a>
        <a className="list-group-item py-2 ">
          <i className="bi bi-person-workspace fs-5 me-3"></i>
          <span onClick={navtoappjobs} className="fs-5">Jobs</span>
        </a>
        <a className="list-group-item py-2">
          <i className="bi bi-bookmarks-fill fs-5 me-3"></i>
          <span onClick={navtoappappliedjobs} className="fs-5">Applied Jobs</span>
        </a>
        <a className="list-group-item py-2">
          <i className="bi bi-person-circle fs-5 me-3"></i>
          <span onClick={navtoappupdateprof} className="fs-5">Update Profile</span>
        </a>
        <a className="list-group-item py-2">
          <i className="bi bi-power fs-5 me-3"></i>
          <span onClick={navtohome} className="fs-5">SignOut</span>
        </a>
      </div>
    </div>
  );
}
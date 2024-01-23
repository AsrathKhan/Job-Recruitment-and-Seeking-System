import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
export default function SideBar() {
  const navigate = useNavigate();
 
  const navtohome = () => {
    navigate("/");
  };
  const navtoadminjob = () => {
    navigate("/adminjob");
  }; 
  const navtoadmincom = () => {
    navigate("/admincom");
  }; 
  const navtoadminsearch = () => {
    navigate("/adminsearch");
  };
  const navtodashadmin=()=>
  {
    navigate("/dashadmin");
  };
  return (
    <div className="bg-white sidebar p-2 h-100">
      <div className="m-2">
        <i className=" me-3 fs-4"></i>
        <span className="brand-name fs-4"></span>
      </div>
      <hr className="text-dark" />
      <div className="list-group list-group-flush">
        <a className="list-group-item py-2 ">
          <i className="bi bi-speedometer2 fs-5 me-3"></i>
          <span onClick={navtodashadmin} className="fs-5">Dashboard</span>
        </a>
        <a className="list-group-item py-2 ">
          <i className="bi bi-person-workspace fs-5 me-3"></i>
          <span onClick={navtoadminjob} className="fs-5">Jobs</span>
        </a>
        <a className="list-group-item py-2">
          <i className="bi bi-buildings-fill fs-5 me-3"></i>
          <span onClick={navtoadmincom} className="fs-5">Company</span>
        </a>
        <a className="list-group-item py-2">
          <i className="bi bi-power fs-5 me-3"></i>
          <span onClick={navtohome} className="fs-5">SignOut</span>
        </a>
      </div>
    </div>
  );
}
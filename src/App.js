import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './components/home'
import About from "./components/about";
import Contact from "./components/contact";
import AppSignin from './components/signin_app'
import AppDashboard from "./components/dashboard_app";
import AppSignup from './components/signup_app'
import AppNextSignup from './components/signup_appnext'
import ComSignin from './components/signin_com'
import ComDashboard from './components/dashboard_com'
import ComSignup from './components/signup_com'
import AdminSignin from './components/signin_admin'
import AdminDashboard from './components/dashboard_admin'
import AdminSearch from './components/adminsearch'
import AdminJob from "./components/adminjob"
import AdminCom from "./components/admincom"
import AppAppliedJobs from "./components/appappliedjobs"
import AppJobs from "./components/appjobs"
import AppUpdateProf from "./components/appupdateprof"
import ComAcceptJobs from "./components/comacceptjobs"
import ComAddJobs from "./components/comaddjobs"
import ComUpdateProf from "./components/comupdateprof"
import AppApply from "./components/appapply"
import AppViewDet from "./components/appviewdet"
import AppApplyJob from "./components/appapplyjob"
import ComApplicants from "./components/comapplicants"
import ComViewDet from "./components/comviewdet"
import ComViewDet2 from "./components/comviewdet2"
import AdminComView from "./components/admincomview"
import AdminAppView from "./components/adminappview"






import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
export default function App() {
  return (
    <>



      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>

        <Route path="/signinadmin" element={<AdminSignin></AdminSignin>}></Route>
        <Route path="/dashadmin" element={<AdminDashboard></AdminDashboard>}></Route>
        <Route path="/adminjob" element={<AdminJob></AdminJob>}></Route>
        <Route path="/admincom" element={<AdminCom></AdminCom>}></Route>
        <Route path="/adminsearch" element={<AdminSearch></AdminSearch>}></Route>
        <Route path="/admincomview" element={<AdminComView></AdminComView>}></Route>
        <Route path="/adminappview" element={<AdminAppView></AdminAppView>}></Route>



        <Route path="/signup" element={<AppSignup></AppSignup>}></Route>
        <Route path="/signupnext" element={<AppNextSignup></AppNextSignup>}></Route>
        <Route path="/signin" element={<AppSignin></AppSignin>}></Route>
        <Route path="/dash" element={<AppDashboard></AppDashboard>}></Route>
        <Route path="/appappliedjobs" element={<AppAppliedJobs></AppAppliedJobs >}></Route>
        <Route path="/appjobs" element={<AppJobs></AppJobs>}></Route>
        <Route path="/appupdateprof" element={<AppUpdateProf></AppUpdateProf>}></Route>
        <Route path="/appapply" element={<AppApply></AppApply>}></Route>
        <Route path="/appviewdet" element={<AppViewDet></AppViewDet>}></Route>
        <Route path="/appapplyjob" element={<AppApplyJob></AppApplyJob>}></Route>




        <Route path="/signupcom" element={<ComSignup></ComSignup>}></Route>
        <Route path="/signincom" element={<ComSignin></ComSignin>}></Route>
        <Route path="/dashcom" element={<ComDashboard></ComDashboard>}></Route>
        <Route path="/comacceptjobs" element={<ComAcceptJobs></ComAcceptJobs>}></Route>
        <Route path="/comaddjobs" element={<ComAddJobs></ComAddJobs>}></Route>
        <Route path="/comupdateprof" element={<ComUpdateProf></ComUpdateProf>}></Route>
        <Route path="/comapplicants" element={<ComApplicants></ComApplicants>}></Route>
        <Route path="/comviewdet" element={<ComViewDet></ComViewDet>}></Route>
        <Route path="/comviewdet2" element={<ComViewDet2></ComViewDet2>}></Route>






      </Routes>
    </>
  )
}

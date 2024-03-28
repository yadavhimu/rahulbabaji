import React from 'react';
// import sitelogo from './Images/sitelogo.png';
import logo from './Images/logo.png';
import MobileDropDown from './MobileDropdown';
function Navbar() {
  return (
    <nav id="navbar" className="navbar-expand-lg " style ={{ backgroundColor: "rgba(255,255,255,0.83)" }}>
      <div className='temp'>
      <div className="container-fluid row">
        <div className="col-1">
        <img className="logo-img" src={logo} height="100px" width="100px" alt="newlogo"/>
        </div>
        <div className="col-xl-8 col-10 header-x header-mobile">
        <a className="navbar-brand header text-wrap" href="/">
        Dr Rahul Astro Homeopathic & Research Center
        </a>
        </div>
        <div className="col-1  d-flex flex-row-reverse">
          <MobileDropDown></MobileDropDown>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        
          <ul className="navbar-nav ms-auto mt-3  ">          
            <li className="nav-item">
              <a className="nav-link active m-3 font-weight-bold" aria-current="page" href="/">
              <h5> Home </h5>
              </a>
            </li>
            <hr/>
            <li className="nav-item">
              <a className="nav-link m-3 font-weight-bold" href="#doc">
              <h5>About </h5>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link m-2 font-weight-bold" href="#foot">
              <h5>Contact Us </h5>
              </a>
            </li>         
          </ul>
         
        </div>
        </div>
      </div></div>
    </nav>
  );
}

export default Navbar;

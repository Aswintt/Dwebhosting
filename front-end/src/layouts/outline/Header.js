import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
      /* <!-- ======= Header ======= --> */
      <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center justify-content-lg-between">
    
          <h1 className="logo me-auto me-lg-0"><Link to="/" style={{ textDecoration: 'none' }}>Dweb<span>.</span></Link></h1>
          {/* <!-- Uncomment below if you prefer to use an image logo --> */}
          {/* <!-- <a href="index.html" className="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>--> */}
    
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li><a className="nav-link scrollto" href="#hero">Home</a></li>
              <li><a className="nav-link scrollto" href="#about">About</a></li>
              <li><a className="nav-link scrollto" href="#services">Services</a></li>
              {/* <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li> */}
              <li><a className="nav-link scrollto" href="#team">Team</a></li>
             {/*  <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a href="#">Drop Down 1</a></li>
                  <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                    <ul>
                      <li><a href="#">Deep Drop Down 1</a></li>
                      <li><a href="#">Deep Drop Down 2</a></li>
                      <li><a href="#">Deep Drop Down 3</a></li>
                      <li><a href="#">Deep Drop Down 4</a></li>
                      <li><a href="#">Deep Drop Down 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Drop Down 2</a></li>
                  <li><a href="#">Drop Down 3</a></li>
                  <li><a href="#">Drop Down 4</a></li>
                </ul>
              </li> */}
              <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav> {/* <!-- .navbar --> */}
    
          <a href="#about" className="get-started-btn scrollto" style={{ textDecoration: 'none' }}>Get Started</a>
    
        </div>
      </header> /* <!-- End Header --> */
    )
};

export default Header;
import React from "react";
import { Link } from "react-router-dom";
const Landing = () => {
    return (
        /* <!-- ======= Hero Section ======= --> */
  <section id="hero" className="d-flex align-items-center justify-content-center">
    <div className="container" data-aos="fade-up">

      <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
        <div className="col-xl-6 col-lg-8">
          <h1>DWEB<span>.</span></h1>
          <h2>A DECENTRALIZED WEB HOSTING</h2>
        </div>
      </div>

      <Link to="/home" style={{ textDecoration: 'none' }}>
      <div className="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
        <div className="col-xl-2 col-md-4">
          <div className="icon-box">
              <div className="icon"><i className="bx bx-slideshow"></i></div>
            <h3 style={{ color: 'white' }}>Dashboard</h3>
          </div>
        </div>
      </div>
      </Link>

    </div>
  </section> /* <!-- End Hero --> */
    )
};

export default Landing;
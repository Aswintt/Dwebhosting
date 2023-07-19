import React from "react";
import { Link } from "react-router-dom";
const Services = () => {
    return (
        /* <!-- ======= Services Section ======= --> */
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Services</h2>
          <p>Check our Services</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-world"></i></div>
              <h4>     <Link to="/webhost" style={{ textDecoration: 'none' }}>Host Website</Link></h4>
              <p>Host your static website on the new open web - Peer</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              <div className="icon"><i className="bx bxl-dribbble"></i></div>
              <h4><Link to="/zipdrive" style={{ textDecoration: 'none' }}>Zip Drive</Link></h4>
              <p>Store your folders in distributed p2p network as Zip.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-file"></i></div>
              <h4><Link to="/singledrive" style={{ textDecoration: 'none' }}>Single Drive</Link></h4>
              <p>Store your file on  distributed p2p network.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
    /* <!-- End Services Section --> */
    )
};

export default Services;
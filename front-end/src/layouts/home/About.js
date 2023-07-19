import React from "react";

const About = () => {
    return (
        /* <!-- ======= About Section ======= --> */
        <section id="about" classNameName="about">
          <div className="container" data-aos="fade-up">
    
            <div className="row">
              <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                <img src="assets/img/about.png" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
                <h3>The Dweb Edge</h3>
                <p className="fst-italic">
                Our revolutionary edge network combines the power of distributed p2p technologies (IPFS) and edge computing to deliver blazing fast load times on IPFS and the Internet Computer at a fraction of the cost. All sites and files on Fleek are automatically deployed to the Fleek Edge.
                </p>
                <ul>
                  <li><i className="ri-check-double-line"></i> Dweb makes it easy to build websites on the new open web.</li>
                  <li><i className="ri-check-double-line"></i> permissionless, trustless, censorship resistant, and free of centralized gatekeepers.</li>
                </ul>
                <p>
                At dweb Hosting, we believe in the power of decentralization to transform the web as we know it. Our platform is designed to empower individuals and businesses to harness the benefits of a decentralized web infrastructure, enabling greater control, security, and resilience.
                </p>
              </div>
            </div>
    
          </div>
        </section>
        /* <!-- End About Section --> */
    )
};

export default About;
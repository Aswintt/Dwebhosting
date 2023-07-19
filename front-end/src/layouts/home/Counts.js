import React from "react";

const Counts = () => {
    return (
        /* <!-- ======= Counts Section ======= --> */
    <section id="counts" className="counts">
      <div className="container" data-aos="fade-up">

        <div className="row no-gutters">
          <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start" data-aos="fade-right" data-aos-delay="100"></div>
          <div className="col-xl-7 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch" data-aos="fade-left" data-aos-delay="100">
            <div className="content d-flex flex-column justify-content-center">
              <h3>Voluptatem dignissimos provident quasi</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
              </p>
              <div className="row">
                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="bi bi-emoji-smile"></i>
                    <span data-purecounter-start="0" data-purecounter-end="65" data-purecounter-duration="2" className="purecounter"></span>
                    <p><strong>Happy Clients</strong> consequuntur voluptas nostrum aliquid ipsam architecto ut.</p>
                  </div>
                </div>

                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="bi bi-journal-richtext"></i>
                    <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="2" className="purecounter"></span>
                    <p><strong>Projects</strong> adipisci atque cum quia aspernatur totam laudantium et quia dere tan</p>
                  </div>
                </div>

                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="bi bi-clock"></i>
                    <span data-purecounter-start="0" data-purecounter-end="35" data-purecounter-duration="4" className="purecounter"></span>
                    <p><strong>Years of experience</strong> aut commodi quaerat modi aliquam nam ducimus aut voluptate non vel</p>
                  </div>
                </div>

                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <i className="bi bi-award"></i>
                    <span data-purecounter-start="0" data-purecounter-end="20" data-purecounter-duration="4" className="purecounter"></span>
                    <p><strong>Awards</strong> rerum asperiores dolor alias quo reprehenderit eum et nemo pad der</p>
                  </div>
                </div>
              </div>
            </div> {/* <!-- End .content--> */}
          </div>
        </div>

      </div>
    </section> /* <!-- End Counts Section-- > */
    )
};

export default Counts;
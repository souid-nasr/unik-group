import React from "react";

function Hero() {
  return (
    <div>
      <section
        id="hero"
        className="d-flex align-items-center justify-content-center"
      >
        <div className="container" data-aos="fade-up">
          <div
            className="row justify-content-center"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="col-xl-6 col-lg-8">
              <h1>
                Powerful Digital Solutions With Unik Group<span>.</span>
              </h1>
              <h2>We are team of talented digital marketers</h2>
            </div>
          </div>

          <div
            className="row gy-4 mt-5 justify-content-center"
            data-aos="zoom-in"
            data-aos-delay="250"
          >
            <div className="col-xl-2 col-md-4">
              <div className="icon-box">
                <i className="bi bi-house-gear"></i>
                <h3>
                  <a href="http://www.unik-espace.com" className="nav-link" >Espace Unik</a>
                </h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <div className="icon-box">
                <i className="bi bi-inboxes"></i>
                <h3>
                  <a href="http://www.comm-unik.com" className="nav-link">Com Unik</a>
                </h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <div className="icon-box">
                <i className="bi bi-camera"></i>
                <h3>
                  <a href="http://www.unik-vision.com" className="nav-link">Unik Vision</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;

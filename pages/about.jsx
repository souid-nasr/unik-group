import React from "react";
import Image from "next/image";
import about from "../assets/img/about.jpg";
import features from "../assets/img/features.jpg";

function About() {
  return (
    <>
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div
            className="col-lg-6 order-1 order-lg-2"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <Image src={about} className="img-fluid" alt="" />
          </div>
          <div
            className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h3>
              Voluptatem dignissimos provident quasi corporis voluptates sit
              assumenda.
            </h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labormmmmmmme et dolore magna aliqua.
            </p>
            <ul>
              <li>
                <span>
                  <i className="bi bi-check2-all" style={{ color: "#ffc451", fontSize: "20px" }} />
                </span>{" "}
                Ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </li>
              <li>
                <span>
                  <i className="bi bi-check2-all" style={{ color: "#ffc451", fontSize: "20px" }} />
                </span>{" "}
                Duis aute irure dolor in reprehenderit in voluptate velit.
              </li>
              <li>
                <span>
                  <i className="bi bi-check2-all" style={{ color: "#ffc451", fontSize: "20px" }} />
                </span>{" "}
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate trideta
                storacalaperda mastiro dolore eu fugiat nulla pariatur.
              </li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="features" className="features">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="image col-lg-6" data-aos="fade-right">
            <Image src={features} alt="" />
          </div>
          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="100">
            <div
              className="icon-box mt-5 mt-lg-0"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              <i className="bi bi-check2-circle"></i>
              <h4>Est labore ad</h4>
              <p>
                Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                laboris nisi ut aliquip
              </p>
            </div>
            <div
              className="icon-box mt-5"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              <i className="bi bi-check2-circle"></i>
              <h4>Harum esse qui</h4>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt
              </p>
            </div>
            <div
              className="icon-box mt-5"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              <i className="bi bi-check2-circle"></i>
              <h4>Aut occaecati</h4>
              <p>
                Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                maiores omnis facere
              </p>
            </div>
            <div
              className="icon-box mt-5"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              <i className="bi bi-check2-circle"></i>
              <h4>Beatae veritatis</h4>
              <p>
                Expedita veritatis consequuntur nihil tempore laudantium vitae
                denat pacta
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default About;

import React from "react";
import {
  AiOutlineDiff,
  AiOutlineCodeSandbox,
  AiOutlineFileImage,
  AiOutlinePrinter,
} from "react-icons/ai";
import Image from "next/image";
import features from "../assets/img/features.jpg";
function Features() {
  return (
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
  );
}

export default Features;

//../assets/img/portfolio/portfolio-1.jpg
"use client";
import React, { useState } from "react";
import Image from "next/image";
import portfolio_1 from "../assets/img/portfolio/portfolio-1.jpg";
import portfolio_2 from "../assets/img/portfolio/portfolio-2.jpg";
import portfolio_3 from "../assets/img/portfolio/portfolio-3.jpg";
import portfolio_4 from "../assets/img/portfolio/portfolio-4.jpg";
import portfolio_5 from "../assets/img/portfolio/portfolio-5.jpg";
import portfolio_6 from "../assets/img/portfolio/portfolio-6.jpg";
import portfolio_7 from "../assets/img/portfolio/portfolio-7.jpg";
import portfolio_8 from "../assets/img/portfolio/portfolio-8.jpg";
import { ImCancelCircle } from "react-icons/im";

const Category = ({ dataSet }) => {
  const [imageModal, setImageModal] = useState(false);
  const [imageSource, setImageSource] = useState("");

  const setImageOnModal = (el) => {
    setImageModal(true);
    setImageSource(el);
  };

  return (
    <>
      <div className={imageModal ? "image-box show-image-box" : "image-box"}>
        <div className="image-box-content">
          <Image src={imageSource} alt="" />
          <span
            className="image-box-close-btn"
            onClick={() => setImageModal(false)}
          >
            <ImCancelCircle size={30} />
          </span>
        </div>
      </div>
      {dataSet.map((el) => {
        return (
          <div
            className="col-lg-4 col-md-6 portfolio-item filter-app"
            key={el._id}
            onClick={() => setImageOnModal(el.image)}
          >
            <div className="portfolio-wrap">
              <Image
style={{height:"300px"}}
                src={el.image}
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>{el.title}</h4>
                <div className="portfolio-links">
                  {/* <a
                  href="../assets/img/portfolio/portfolio-1.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="App 1"
                >
                  <i className="bx bx-plus"></i>
                </a> */}
                  <a
                    title="App 1"
                    data-gallery="portfolio-gallery"
                    className="glightbox preview-link"
                  >
                    <i
                      className="bi bi-zoom-in"
                      onClick={() => setImageOnModal(el.image)}
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
const data = [
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "portfolio 1",
    image: portfolio_1,
    category: "comunik",
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "portfolio 2",
    image: portfolio_2,
    category: "comunik",
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "portfolio 3",
    image: portfolio_3,
    category: "unikvision",
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "portfolio 4",
    image: portfolio_4,
    category: "unikvision",
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "portfolio 5",
    image: portfolio_5,
    category: "unikespace",
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "portfolio 6",
    image: portfolio_6,
    category: "unikespace",
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "portfolio 7",
    image: portfolio_7,
    category: "unikvision",
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "portfolio 8",
    image: portfolio_8,
    category: "comunik",
  },
];
function page() {
  const [activeCategory, setActiveCategory] = useState("all");
  const data_com = data.filter((el) => el.category === "comunik");
  const data_espace = data.filter((el) => el.category === "unikvision");
  const data_vision = data.filter((el) => el.category === "unikespace");
  return (
    <div>
      <section id="portfolio" className="portfolio">
        <div className="container" data-aos="fade-up">
          <div className="section-title" style={{ paddingTop: "100px" }}>
            <h2>Portfolio</h2>
            <p>Check our Portfolio</p>
          </div>
          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li
                  data-filter="*"
                  className={activeCategory === "all" ? "filter-active" : ""}
                  data-bs-toggle="tab"
                >
                  <button onClick={() => setActiveCategory("all")}> All</button>
                </li>
                <li
                  data-filter="*"
                  className={
                    activeCategory === "comunik" ? "filter-active" : ""
                  }
                  data-bs-toggle="tab"
                >
                  <button onClick={() => setActiveCategory("comunik")}>
                    {" "}
                    Com Unik
                  </button>
                </li>
                <li
                  data-filter="*"
                  className={
                    activeCategory === "unikespace" ? "filter-active" : ""
                  }
                  data-bs-toggle="tab"
                >
                  <button onClick={() => setActiveCategory("unikespace")}>
                    {" "}
                    Unik Espace
                  </button>
                </li>
                <li
                  data-filter="*"
                  className={
                    activeCategory === "unikvision" ? "filter-active" : ""
                  }
                  data-bs-toggle="tab"
                >
                  <button onClick={() => setActiveCategory("unikvision")}>
                    {" "}
                    Unik vision
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="row portfolio-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {activeCategory === "all" && <Category dataSet={data} />}
            {activeCategory === "comunik" && <Category dataSet={data_com} />}
            {activeCategory === "unikvision" && (
              <Category dataSet={data_vision} />
            )}
            {activeCategory === "unikespace" && (
              <Category dataSet={data_espace} />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;

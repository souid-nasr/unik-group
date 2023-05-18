"use client";
import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleMobileNavToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-lg-between">
        <h1 className="logo me-auto me-lg-0">
          <a href="index.html">
            Unik Group<span>.</span>
          </a>
        </h1>
        <nav
          id="navbar"
          className={`navbar order-last order-lg-0 ${
            isMobileNavOpen ? "navbar-mobile" : ""
          }`}
        >
          <ul>
            <li>
              <a className="nav-link scrollto active" href="/">
                Home
              </a>
            </li>
            <li>
              <Link className="nav-link scrollto" href="/about">
                About
              </Link>
            </li>


            <li className="dropdown">
              <a href="/services">
                <span style={{ textTransform: "none" }}>Services</span>{" "}
                <i className="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <a href="http://www.unik-espace.com">Unik Espace</a>
                </li>
                <li className="dropdown">
                  <a href="http://www.comm-unik.com">Com Unik </a>
                </li>
                <li>
                  <a href="http://www.unik-vision.com">Unik Vision</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="nav-link scrollto " href="/portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="/contact">
                Contact
              </a>
            </li>
          </ul>
          <i
            className={`bi ${
              isMobileNavOpen ? "bi-x" : "bi-list"
            } mobile-nav-toggle`}
            onClick={handleMobileNavToggle}
          ></i>
        </nav>
        <a href="#about" className="get-started-btn scrollto">
          Get Started
        </a>
      </div>
    </header>
  );
}
export default Navbar;

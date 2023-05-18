"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div
        id="navbar"
        className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white"
      >
        <header id="header" class="fixed-top ">
          <div class="container d-flex align-items-center justify-content-lg-between">
            <h1 class="logo me-auto me-lg-0">
              <a href="index.html">
                Gp<span>.</span>
              </a>
            </h1>
            <a href="index.html" class="logo me-auto me-lg-0">
              <img src="../assets/img/logo.png" alt="" class="img-fluid" />
            </a>

            <nav id="navbar" class="navbar order-last order-lg-0">
              <ul>
                <li>
                  <a class="nav-link scrollto active" href="#hero">
                    Home
                  </a>
                </li>
                <li>
                  <a class="nav-link scrollto" href="#about">
                    About
                  </a>
                </li>
                <li>
                  <a class="nav-link scrollto" href="#services">
                    Services
                  </a>
                </li>
                <li>
                  <a class="nav-link scrollto " href="#portfolio">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a class="nav-link scrollto" href="#team">
                    Team
                  </a>
                </li>
                <li class="dropdown">
                  <a href="#">
                    <span>Drop Down</span> <i class="bi bi-chevron-down"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="#">Drop Down 1</a>
                    </li>
                    <li class="dropdown">
                      <a href="#">
                        <span>Deep Drop Down</span>{" "}
                        <i class="bi bi-chevron-right"></i>
                      </a>
                      <ul>
                        <li>
                          <a href="#">Deep Drop Down 1</a>
                        </li>
                        <li>
                          <a href="#">Deep Drop Down 2</a>
                        </li>
                        <li>
                          <a href="#">Deep Drop Down 3</a>
                        </li>
                        <li>
                          <a href="#">Deep Drop Down 4</a>
                        </li>
                        <li>
                          <a href="#">Deep Drop Down 5</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Drop Down 2</a>
                    </li>
                    <li>
                      <a href="#">Drop Down 3</a>
                    </li>
                    <li>
                      <a href="#">Drop Down 4</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a class="nav-link scrollto" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <a href="#about" class="get-started-btn scrollto">
              Get Started
            </a>
          </div>
        </header>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="nav-link scrollto p-4 text-4xl hover:text-gray-500"
            >
              <a href="/">Home</a>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <a href="/#gallery">Gallery</a>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <a href="/work">Work</a>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

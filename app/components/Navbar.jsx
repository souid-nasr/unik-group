"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import NavLogo from "../assets/img/clients/client-4.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("rgba(0, 0, 0, 0.9)");
  const [linkColor, setLinkColor] = useState("#1f2937");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            src={NavLogo}
            alt="/"
            width="100"
            height="10"
            className="cursor-pointer"
          />
        </Link>
        <div className="navbar mx-5">
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <li>
              <Link className="nav-link scrollto" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" href="/about">
                About
              </Link>
            </li>

            <li className="dropdown">
              <Link href="/services">
                <span style={{ textTransform: "none" }}>Services</span>{" "}
                <i className="bi bi-chevron-down"></i>
              </Link>
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
              <Link className="nav-link scrollto " href="/portfolio">
                Portfolio
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div onClick={handleNav} className="md:hidden text-yellow-500">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-black/25 p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image src={NavLogo} width="87" height="35" alt="/" />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-yellow-500 text-yellow-500 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b-[2px] border-yellow-500 my-4">
              <p className="w-[85%] md:w-[90%] py-4 text-yellow-500">
                Let&#39;s build something legendary together
              </p>
            </div>
          </div>
          <div className="py-3 flex flex-col">
            <ul className="uppercase text-yellow-400">
              <Link href="/">
                <li
                  onClick={() => setNav(false)}
                  className="py-2  text-sm text-yellow-400"
                >
                  Home
                </li>
              </Link>
              <Link href="/about">
                <li
                  onClick={() => setNav(false)}
                  className="py-2 text-yellow-400 text-sm"
                >
                  About
                </li>
              </Link>
              <Link href="/services">
                <li
                  onClick={() => setNav(false)}
                  className="py-2 text-yellow-400 text-sm"
                >
                  Services
                </li>
              </Link>
              <Link href="/portfolio">
                <li
                  onClick={() => setNav(false)}
                  className="py-2 text-yellow-400 text-sm"
                >
                  Portfolio
                </li>
              </Link>
              <Link href="/contact">
                <li
                  onClick={() => setNav(false)}
                  className="py-2 text-yellow-400 text-sm"
                >
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-35">
              <p className="uppercase tracking-widest text-yellow-500">
                Let&#39;s Connect
              </p>
              <div className="flex items-center text-yellow-500 justify-between my-2 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/clint-briley-50056920a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg text-yellow-500 shadow-yellow-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/fireclint"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 text-yellow-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <Link href="/#contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg text-yellow-500 shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href="/resume">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg text-yellow-500 shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

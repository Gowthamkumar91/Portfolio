import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Logo from "../assets/logo.png";

function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="flex justify-between px-6 py-4 bg-[#3a3c3c] fixed top-0 w-full z-50">
      {/* Logo + Name */}
      <a className="flex items-center font-extrabold tracking-wide text-slate-100">
        <img src={Logo} alt="G Logo" className="h-10 w-10 mr-2" />
        <span className="text-xl md:text-2xl">Gowtham</span>
      </a>
      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className=" flex header-ul text-white">
          <li className="">
            <a href="/">Home</a>
          </li>
          <li className="">
            <a href="#about">About</a>
          </li>
          <li className="">
            <a href="#projects">Projects</a>
          </li>
          <li className="">
            <a href="#resume">Resume</a>
          </li>
          <li className="">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      {/* Mobile Nav */}
      {toggle && (
        <nav className="block md:hidden">
          <ul
            onClick={() => {
              setToggle(!toggle);
            }}
            className=" flex flex-col header-ul text-white  mobile-nav "
          >
            <li className="">
              <a href="/">Home</a>
            </li>
            <li className="">
              <a href="#about">About</a>
            </li>
            <li className="">
              <a href="#projects">Projects</a>
            </li>
            <li className="">
              <a href="#resume">Resume</a>
            </li>
            <li className="">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      )}
      {/* Mobile toggle button */}
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
        className="block md:hidden"
      >
        <Bars3Icon className="size-6 text-white h" />
      </button>
    </header>
  );
}
export default Header;

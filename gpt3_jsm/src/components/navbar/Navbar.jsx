import React from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
//BEM (Block Element Modifier) naming convention
const Navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wgpt3">What is GPT?</a>
          </p>
          <p>
            <a href="#possiibility">Open AI</a>
          </p>
          <p>
            <a href="#features">Case Stuides</a>
          </p>
          <p>
            <a href="#blog">Library</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo" src={logo} alt="Logo" />
      </Link>
    </div>
  );
};

export default Navbar;

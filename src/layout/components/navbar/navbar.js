import React, { Component } from "react";
import "./navbar.css";
import logo from "../../../assets/logo.png";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <img src={logo} alt="" />
        <div className="nav">
          <a href="/">Home</a>
          <a href="/">Vehicles</a>
          <a href="/">Review</a>
          <a href="/">Tour</a>
          <a href="/">Travels</a>
          <a href="/">About</a>
        </div>
      </div>
    );
  }
}

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
          <a href="/vehicles">Vehicles</a>
          <a href="/">Gallery</a>
          <a href="/tour">Tour</a>
          <a href="/travel">Travels</a>
          <a href="/about">About</a>
        </div>
      </div>
    );
  }
}

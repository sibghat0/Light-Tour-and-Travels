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
          <a href="/gallery">Gallery</a>
          <a href="/travel">Travels</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    );
  }
}

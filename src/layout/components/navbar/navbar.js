import React, { Component } from "react";
import "./navbar.css";
import logo from "../../../assets/logo.png";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hamburger: false,
      whiteNavbar: false,
    };
  }

  componentDidMount() {
    window.onscroll = () => {
      if (window.pageYOffset >= 400) {
        this.setState({
          whiteNavbar: true,
        });
      } else {
        this.setState({
          whiteNavbar: false,
        });
      }
    };
  }

  render() {
    return (
      <div className={this.state.whiteNavbar ? "navbar white" : "navbar"}>
        <img src={logo} alt="" />
        <div className="nav">
          <a href="/">Home</a>
          <a href="/vehicles">Vehicles</a>
          <a href="/gallery">Gallery</a>
          <a href="/travel">Travels</a>
          <a href="/contact">Contact</a>
        </div>
        <div
          className="hamburgerLines"
          onClick={() => {
            this.setState({ hamburger: true });
            document.body.style.overflow = "hidden";
          }}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div
          className={this.state.hamburger ? "hamburger active" : "hamburger"}
        >
          <i
            className="fas fa-times"
            onClick={() => {
              this.setState({ hamburger: false });
              document.body.style.overflow = "auto";
            }}
          ></i>
          <a href="/">
            <i className="fas fa-home"></i> Home
          </a>
          <a href="/vehicles">
            <i className="fas fa-car"></i> Vehicles
          </a>
          <a href="/gallery">
            <i className="fas fa-images"></i>Gallery
          </a>
          <a href="/tour">
            <i className="fas fa-route"></i>Tour
          </a>
          <a href="/travel">
            <i className="fas fa-bus"></i>Travels
          </a>
          <a href="/contact">
            <i className="fas fa-address-book"></i>Contact
          </a>
        </div>
      </div>
    );
  }
}

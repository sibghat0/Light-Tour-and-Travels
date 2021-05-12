import React, { Component } from "react";
import "./footer.css";
import logo from "../../../assets/logo.png";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="top">
          <div className="left">
            <div className="logoSection">
              <img src={logo} alt="" />
              <div className="details">
                <h3>Light Tour and Travels</h3>
                <p>Traveling Agency</p>
              </div>
            </div>
            <div className="content">
              <p>
                “Travel is the main thing you purchase that makes you more
                extravagant”. We at “Light Tour and Travels” aims at providing
                our clients with satisfying travel dreams and a hassle free
                travel. Since our inception in 1995 “Light Tour and Travels” had
                been catering to the needs of more than thousands of customers.
                It is our duty in making utmost efforts to make the best deals
                available to our customers. We are thereby committed to
                providing a professional service to all our clients at a
                national level. We are here to provide the best places in the
                budget and packages you cannot deny for the wanderlust in you We
                pride ourselves in being fast, efficient and cost effective
                travel experience.
              </p>
              <h3 style={{ marginTop: 20 }}>ADDING JOY TO YOUR EXPERIENCE.</h3>
            </div>
          </div>
          <div className="right">
            <div className="nav-links">
              <h4>Pages</h4>
              <a href="">Home</a>
              <a href="">Vehicels</a>
              <a href="">Gallery</a>
              <a href="">Tour</a>
              <a href="">Travels</a>
              <a href="">About</a>
            </div>
            <div className="nav-links social">
              <h4>Stay Connected</h4>
              <a href="">
                <i className="fab fa-facebook"></i> Facebook
              </a>
              <a href="">
                <i className="fab fa-instagram"></i> Instagram
              </a>
              <a href="">
                <i className="fab fa-whatsapp"></i>Whatsapp
              </a>
            </div>
            <div className="nav-links contact">
              <h4>Contact</h4>
              <a href="tel:9874580777">
                <i className="fas fa-phone-alt"></i>+91 9874580777
              </a>
              <a href="tel:9339739777">
                <i className="fas fa-phone-alt"></i>+91 9339739777
              </a>
              <a href="mailto:mdzahid@lighttourandtravels.com">
                <i className="fas fa-envelope"></i>
                mdzahid@lighttourandtravels.com
              </a>
            </div>
          </div>
        </div>
        <div className="bottom">
          <p>
            &copy; {new Date().getFullYear()} | Light Tour and Travels | All
            Right Reserved | Powered by{" "}
            <a href="https://theorydev.com" target="_blank">
              <strong>TheoryDev</strong>
            </a>
          </p>
        </div>
      </div>
    );
  }
}

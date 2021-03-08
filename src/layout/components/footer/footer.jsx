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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Numquam eligendi, corrupti quas dicta dolorem maxime ad natus
                molestiae autem, temporibus perspiciatis voluptatibus similique
                molestias quam? Suscipit dolorum iure porro aut magnam, repellat
                amet, quo esse consectetur hic ipsum enim ipsam voluptatum nulla
                commodi numquam rerum. Impedit earum voluptatibus eaque quod
                repudiandae molestiae officia incidunt amet facilis cumque
                nobis, tempore dicta soluta qui dignissimos necessitatibus
                perspiciatis quo! Ducimus nam earum beatae, impedit ex,
                accusamus a ullam veniam aperiam, magnam ab expedita.
              </p>
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

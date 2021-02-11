import React, { Component } from "react";
import "./toursWeProvide.css";
import image from "../../../../../assets/tourCard.png";
import image1 from "../../../../../assets/tourCard2.png";
import image2 from "../../../../../assets/tourCard3.png";

export default class ToursWeProvide extends Component {
  render() {
    return (
      <div className="toursWeProvide">
        <h2>Tours We Provide</h2>
        <div className="cards">
          <div className="card">
            <div className="top">
              <img src={image} alt="" />
            </div>
            <div className="bottom">
              <h4>KOLKATA TOUR</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad
              </p>
            </div>
          </div>
          <div className="card">
            <div className="top">
              <img src={image1} alt="" />
            </div>
            <div className="bottom">
              <h4>KOLKATA TOUR</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad
              </p>
            </div>
          </div>
          <div className="card">
            <div className="top">
              <img src={image2} alt="" />
            </div>
            <div className="bottom">
              <h4>KOLKATA TOUR</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

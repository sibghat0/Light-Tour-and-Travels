import React, { Component } from "react";
import "./toursWeProvide.css";
import kolkataTour from "../../../../../assets/kolkataTour.jpg";
import darjeelingTour from "../../../../../assets/darjeelingTour.jpg";
import sundarbanTour from "../../../../../assets/sundarbanTour.png";

export default class ToursWeProvide extends Component {
  render() {
    return (
      <div className="toursWeProvide">
        <h2>Tours We Provide</h2>
        <div className="cards">
          <div className="card">
            <div className="top">
              <img src={kolkataTour} alt="" />
            </div>
            <div className="bottom">
              <h4>KOLKATA TOUR</h4>
              <p>
                Kolkata, India's second biggest city, is a perpetually ongoing
                festival of human existence, concurrently luxurious and squalid,
                refined and frantic, pointedly futuristic, while beautifully in
                decay.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="top">
              <img src={darjeelingTour} alt="" />
            </div>
            <div className="bottom">
              <h4>DARJEELING TOUR</h4>
              <p>
                Darjeeling hill town is located at an altitude of 6,710ft in
                north east India and is part of the state of West Bengal. The
                nearest airport is Bagdogra and the nearest major railway
                junction is New Jalpaiguri (NJP).
              </p>
            </div>
          </div>
          <div className="card">
            <div className="top">
              <img src={sundarbanTour} alt="" />
            </div>
            <div className="bottom">
              <h4>SUNDARBAN TOUR</h4>
              <p>
                The Sundarbans a UNESCO World Heritage Site is located at the
                South eastern tip of the 24 Paraganas district about 110 km from
                Kolkata. It got its name from one of the mangrove plants known
                as Sundari.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

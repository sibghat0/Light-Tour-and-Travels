import React, { Component } from "react";
import "./home.css";
import AboutTour from "./sections/aboutTour/aboutTour";
import Hero from "./sections/hero/hero";
import Map from "./sections/map/map";
import ToursWeProvide from "./sections/toursWeProvide/toursWeProvide";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Hero />
        <Map />
        <AboutTour />
        <ToursWeProvide />
      </div>
    );
  }
}

import React, { Component } from "react";
import "./home.css";
import AboutTour from "./sections/aboutTour/aboutTour";
import Connect from "./sections/connect/connect";
import Hero from "./sections/hero/hero";
import Map from "./sections/map/map";
import Tour from "./sections/tour/tour";
import ToursWeProvide from "./sections/toursWeProvide/toursWeProvide";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Hero />
        <Tour />
        <Map />
        <AboutTour />
        <Connect handleContact={this.props.handleContact} />
        <ToursWeProvide />
      </div>
    );
  }
}

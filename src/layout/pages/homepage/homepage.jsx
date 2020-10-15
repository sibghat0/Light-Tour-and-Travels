import React from "react";
import "./homepage.css";
import HeroSection from "./sections/heroSection/heroSection";
import Services from "./sections/services/services";

export default class Homepage extends React.Component {
  render() {
    return (
      <div className="homepage-container">
          <HeroSection />
          <Services />
      </div>
    );
  }
}

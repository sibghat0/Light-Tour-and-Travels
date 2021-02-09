import React, { Component } from "react";
import "./home.css";
import Hero from "./sections/hero/hero";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Hero />
      </div>
    );
  }
}

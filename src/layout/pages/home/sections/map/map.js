import React, { Component } from "react";
import "./map.css";
import map from "../../../../../assets/map.png";

export default class Map extends Component {
  render() {
    return (
      <div className="map">
        <div className="left">
          <img src={map} alt="" />
        </div>
        <div className="right">
          <h4>TRAVEL ALL OVER INDIA</h4>
          <ul>
            <li>Kolkata</li>
            <li>Mumbai</li>
            <li>Chandigarh</li>
            <li>Dehli</li>
            <li>Arunachal Pradesh</li>
            <li>Maharashtra</li>
            <li>Tamil Nadu</li>
            <li>Rajasthan</li>
            <li>Gujrat</li>
            <li>Jharkhand</li>
          </ul>
        </div>
      </div>
    );
  }
}

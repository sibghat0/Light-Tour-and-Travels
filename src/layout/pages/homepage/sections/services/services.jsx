import React from "react";
import "./services.css";
import map from "../../../../../assets/indiamap.png";

export default class Services extends React.Component {
  render() {
    return (
      <div className="services">
        <div className="state">
          <div className="map">
            <img src={map} alt="map" />
          </div>
          <div className="state-name"></div>
        </div>
      </div>
    );
  }
}

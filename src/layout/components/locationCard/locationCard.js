import React, { Component } from "react";
import "./locationCard.css";
import background from "../../../assets/victoria.jpg";

export default class LocationCard extends Component {
  render() {
    return (
      <div className="locationCard">
        <img src={this.props.background} alt="" />
        <h3>{this.props.name}</h3>
      </div>
    );
  }
}

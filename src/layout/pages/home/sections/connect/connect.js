import React, { Component } from "react";
import "./connect.css";

export default class Connect extends Component {
  render() {
    return (
      <div className="connect">
        <h2>CONNECT WITH US</h2>
        <p>
          We fullfill the dream you desire, you are just a click away to make
          your dream come true.
        </p>
        <button type="button" onClick={this.props.handleContact}>
          Click Here
        </button>
      </div>
    );
  }
}

import React, { Component } from "react";
import manali from "../../../assets/manali1.JPG";
import "./gallery.css";

export default class Gallery extends Component {
  render() {
    return (
      <div className="gallery">
        <div className="heading">
          <h4>GALLERY</h4>
          <a href="">
            <i className="far fa-star"></i> Starred
          </a>
        </div>
        <div className="gallery-cont">
          <div className="gallery-show">
            <img src={manali} alt="" />
            <div className="content">
              <p>Manali Tour</p>
            </div>
          </div>
          <div className="gallery-show">
            <img src={manali} alt="" />
            <div className="content">
              <p>Manali Tour</p>
            </div>
          </div>
          <div className="gallery-show">
            <img src={manali} alt="" />
            <div className="content">
              <p>Manali Tour</p>
            </div>
          </div>
          <div className="gallery-show">
            <img src={manali} alt="" />
            <div className="content">
              <p>Manali Tour</p>
            </div>
          </div>
          <div className="gallery-show">
            <img src={manali} alt="" />
            <div className="content">
              <p>Manali Tour</p>
            </div>
          </div>
          <div className="gallery-show">
            <img src={manali} alt="" />
            <div className="content">
              <p>Manali Tour</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

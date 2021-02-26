import React, { Component } from "react";
import manali from "../../../assets/manali1.JPG";
import "./gallery.css";

export default class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          img: manali,
          name: "Manali Tour",
        },
      ],
    };
  }
  render() {
    return (
      <div className="gallery">
        <div className="heading">
          <h4>GALLERY</h4>
          <a href="">
            <i className="far fa-star"></i> Starred
          </a>
        </div>
        <div className="respo">
          {this.state.data.map((i) => {
            return (
              <div className="gallery-cont">
                <div className="gallery-show">
                  <img src={i.img} alt="" />
                  <div className="content">
                    <p>{i.name}</p>
                  </div>
                </div>
                <div className="gallery-show">
                  <img src={i.img} alt="" />
                  <div className="content">
                    <p>{i.name}</p>
                  </div>
                </div>
                <div className="gallery-show">
                  <img src={i.img} alt="" />
                  <div className="content">
                    <p>{i.name}</p>
                  </div>
                </div>
                <div className="gallery-show">
                  <img src={i.img} alt="" />
                  <div className="content">
                    <p>{i.name}</p>
                  </div>
                </div>
                <div className="gallery-show">
                  <img src={i.img} alt="" />
                  <div className="content">
                    <p>{i.name}</p>
                  </div>
                </div>
                <div className="gallery-show">
                  <img src={i.img} alt="" />
                  <div className="content">
                    <p>{i.name}</p>
                  </div>
                </div>
                <div className="gallery-show">
                  <img src={i.img} alt="" />
                  <div className="content">
                    <p>{i.name}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

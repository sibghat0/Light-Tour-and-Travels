import React, { Component } from "react";
import "./hero.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import victoria from "../../../../../assets/victoria memorial.jpg";
import museum from "../../../../../assets/indian museum.jpg";
import thakurbari from "../../../../../assets/thakurbari.jpg";
import parkStreet from "../../../../../assets/park street.jpg";
import howrah from "../../../../../assets/howrah bridge.jpg";
import logo from "../../../../../assets/logo.png";

export default class Hero extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: false,
    };
    return (
      <div className="hero">
        <h3>
          <img src={logo} alt="" />
          Light
          <br />
          Tour and Travels
        </h3>
        <Slider {...settings}>
          <div>
            <img src={victoria} alt="" />
          </div>
          <div>
            <img src={museum} alt="" />
          </div>
          <div>
            <img src={thakurbari} alt="" />
          </div>
          <div>
            <img src={parkStreet} alt="" />
          </div>
          <div>
            <img src={howrah} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}

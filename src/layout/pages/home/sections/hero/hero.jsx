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

export default class Hero extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="hero">
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

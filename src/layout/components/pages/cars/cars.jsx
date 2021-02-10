import React, { Component } from "react";
import Slider from "react-slick";
import "./cars.css";

import car1 from "../../../../assets/car1.png";
import car2 from "../../../../assets/car2.jpg";
import car3 from "../../../../assets/car3.jpg";
import car4 from "../../../../assets/car4.jpg";

export default class Cars extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={car1} alt="img" />
          </div>
          <div>
            <img src={car2} alt="img" />
          </div>
          <div>
            <img src={car3} alt="img" />
          </div>
          <div>
            <img src={car4} alt="img" />
          </div>
        </Slider>
      </div>
    );
  }
}

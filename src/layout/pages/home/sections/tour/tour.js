import React, { Component } from "react";
import "./tour.css";
import Slider from "react-slick";
import LocationCard from "../../../../components/locationCard/locationCard";

export default class Tour extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      // slidesToScroll: 1,
      centerMode: true,
      centerPadding: "0px",
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2.35,
            swipeToSlide: false,
          },
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 1,
            swipeToSlide: false,
          },
        },
      ],
    };
    return (
      <div className="tour">
        <p>Find a Tour by</p>
        <h2>KOLKATA CITY TOUR</h2>
        <div className="cards">
          <Slider {...settings}>
            <LocationCard />
            <LocationCard />
            <LocationCard />
            <LocationCard />
            <LocationCard />
            <LocationCard />
          </Slider>
        </div>
      </div>
    );
  }
}

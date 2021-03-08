import React, { Component } from "react";
import "./tour.css";
import princep from "../../../../../assets/princep.jpg";
import ecoPark from "../../../../../assets/ecoPark.jpg";
import scienceCity from "../../../../../assets/scienceCity.jpg";
import indianMuseum from "../../../../../assets/indianMuseum.jpg";
import Slider from "react-slick";
import LocationCard from "../../../../components/locationCard/locationCard";

export default class Tour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [
        {
          img: princep,
          name: "Princep Ghat",
        },
        {
          img: ecoPark,
          name: "Eco Park",
        },
        {
          img: scienceCity,
          name: "Science City",
        },
        {
          img: indianMuseum,
          name: "Indian Museum",
        },
      ],
    };
  }

  render() {
    const settings = {
      dots: true,
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
            {this.state.locations.map((location) => (
              <LocationCard background={location.img} name={location.name} />
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

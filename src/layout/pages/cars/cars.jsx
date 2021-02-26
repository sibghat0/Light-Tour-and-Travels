import React, { Component } from "react";
import Slider from "react-slick";
import "./cars.css";

import car1 from "../../../assets/car1.png";
import car2 from "../../../assets/car2.jpg";
import car3 from "../../../assets/car3.jpg";
import car4 from "../../../assets/car4.jpg";

export default class Cars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 0,
      data: [
        {
          img: car1,
          h2: "INNOVA",
          p: `The Toyota Innova has 1 Diesel Engine and 1 Petrol Engine on offer. The Diesel engine is 2494 cc while the Petrol engine is 
              1998 cc . It is available with the Manual transmission. Depending upon the variant and fuel type the Innova has a mileage of 11.4 to 12.99 kmpl. The Innova is a 8 seater 
              and has length of 4585mm, width of 1760mm and a wheelbase of 2750mm.`,
        },
        {
          img: car2,
          h2: "INNOVA",
          p: `The Toyota Innova has 1 Diesel Engine and 1 Petrol Engine on offer. The Diesel engine is 2494 cc while the Petrol engine is 
              1998 cc . It is available with the Manual transmission. Depending upon the variant and fuel type the Innova has a mileage of 11.4 to 12.99 kmpl. The Innova is a 8 seater 
              and has length of 4585mm, width of 1760mm and a wheelbase of 2750mm.`,
        },
        {
          img: car3,
          h2: "HONDA CITY",
          p: `The Honda City has 1 Diesel Engine and 1 Petrol Engine on offer. The Diesel engine is 1498 cc while the Petrol engine is 1498 cc . It is available with the Manual &
              Automatic transmission. Depending upon the variant and fuel type the City has a mileage of 17.8 to 24.1 kmpl. The City is a 5 seater and has length of 4549mm, width 
              of 1748mm and a wheelbase of 2600mm.`,
        },
        {
          img: car4,
          h2: "Web Maintanance",
          p: `We understand your dilemma! You want the website to
          keep performing well and stay fruitful to you. At
          Intlum, we take pride in maintaining the website on
          your behalf, so that you don’t need to worry about the
          engagement and optimization of your website. We keep
          the flow of leads coming to our clients by maintaining
          their websites and we want to keep on doing so by
          maintaining the website and helping you retain the
          leads for your business and keeping its standard
          alive.`,
        },
      ],
    };
  }

  render() {
    return (
      <div className="services">
        <h1>Cars We Provide</h1>
        <div className="services-body">
          {this.state.data.map((item) => {
            return (
              <div className="services-content">
                <div className="top">
                  <img src={item.img} alt="" />
                  <div className="content">
                    <h2>{item.h2}</h2>
                    <p>{item.p}</p>
                  </div>
                </div>
                <div className="bottom">
                  {/* <img src="" alt="" className="arrow" /> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import "./cars.css";

import car1 from "../../../assets/car1.jpg";
import car2 from "../../../assets/car2.jpg";
import car3 from "../../../assets/car3.png";
import car4 from "../../../assets/car4.png";

export default class Cars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 0,
      data: [
        {
          img: car1,
          h2: "SWIFT DEZIRE",
          p: `The Maruti Dzire has 1 Petrol Engine on offer. The Petrol engine is 1197 cc . ... Depending upon the variant and fuel type the Dzire has a mileage of 23.26 to 24.12 kmpl. The Dzire is a 5 seater and has length of 3995mm, width of 1735mm and a wheelbase of 2450mm.`,
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
          h2: "TEMPO TRAVELLER",
          p: `The Force Traveller is a light commercial vehicle made and distributed by Indian manufacturer Force Motors. The Traveller is powered by a Mercedes-Benz derived 2.6-litre (2596 cc) FM 2.6 CR BS VI engine, with CNG and diesel options. The diesel unit produces 67 kW (91 PS; 90 bhp) @ 2800 rpm and torque of 250 N⋅m (184 lb⋅ft) @ 1400 - 2400 rpm.`,
        },
      ],
    };
  }

  render() {
    return (
      <div className="services">
        <h1>CARS WE PROVIDE</h1>
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

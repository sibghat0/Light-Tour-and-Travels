import React, { Component } from "react";
import "./travel.css";

import car1 from "../../../assets/car1.png";
import car2 from "../../../assets/car2.jpg";
import car3 from "../../../assets/car3.jpg";
import car4 from "../../../assets/car4.jpg";

export default class TravelMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          img: car1,
          h4: "MARUTI SUZUKI SWIFT DEZIRE",
          p:
            "Web development is the work involved in developing a website for the internet or a intranet.web development can range from developing a simple static page of plain text to complex web-based applications , e-business and social network services.Web development is a wider concept it includes web engineering a web design web content development, web server, etc.",
          ol: [
            {
              ol: "sibghat",
              img: car2,
            },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <div className="cars-cont">
        {/* <h4>First Slider</h4> */}
        {this.state.data.map((item) => {
          return (
            <>
              <div className="image">
                <img src={item.img} alt="img" />
              </div>

              <div className="sec-cont">
                <div className="car-des">
                  <h4>{item.h4}</h4>
                  <p>{item.p}</p>
                </div>
                <div className="car-des">
                  <h4>HIGHLIGHT</h4>
                  {item.ol.map((i) => {
                    return (
                      <div className="other">
                        <div className="section">
                          <h4>{i.ol}</h4>
                          <img src={i.img} alt="img" />
                        </div>
                        <div className="section">
                          <h4>{i.ol}</h4>
                          <img src={i.img} alt="img" />
                        </div>
                        <div className="section">
                          <h4>{i.ol}</h4>
                          <img src={i.img} alt="img" />
                        </div>
                        <div className="section">
                          <h4>{i.ol}</h4>
                          <img src={i.img} alt="img" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    );
  }
}

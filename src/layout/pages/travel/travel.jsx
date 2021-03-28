import React, { Component } from "react";
import "./travel.css";
import firebase from "firebase";

export default class TravelMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        // {
        //   img: car1,
        //   h4: "MARUTI SUZUKI SWIFT DEZIRE",
        //   p:
        //     "Web development is the work involved in developing a website for the internet or a intranet.web development can range from developing a simple static page of plain text to complex web-based applications , e-business and social network services.Web development is a wider concept it includes web engineering a web design web content development, web server, etc.",
        //   ol: [
        //     {
        //       olh: "sibghat",
        //       img: car2,
        //     },
        //     {
        //       olh: "sib",
        //       img: car2,
        //     },
        //   ],
        // },
      ],
    };
  }

  componentDidMount() {
    var data = [];
    firebase
      .firestore()
      .collection("tour")
      .onSnapshot((snap) => {
        snap.docChanges().forEach((changes) => {
          data.push(changes.doc.data());
        });
        this.setState({
          data: data,
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.data.map((item) => {
          return (
            <div className="cars-cont">
              <div className="image">
                <img src={item.Image} alt="img" />
              </div>

              <div className="sec-cont">
                <div className="car-des">
                  <h4>{item.Heading}</h4>
                  <p>{item.Para}</p>
                </div>
                <div className="car-des">
                  <h4>TOURIST ATTRACTIONS</h4>
                  {item.ol.map((i) => {
                    console.log(i);
                    return (
                      <div className="other">
                        <div className="section">
                          <h4>{i.olh}</h4>
                          <img src={i.img} alt="img" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

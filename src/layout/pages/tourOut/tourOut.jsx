import React, { Component } from "react";
import "./tourOut.css";
import firebase from "firebase";

export default class Tour extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    firebase
      .firestore()
      .collection("tour")
      .get()
      .then((snap) => {
        var temp = [];
        snap.forEach((doc) => {
          const data = doc.data();
          temp.push(data);
        });
        this.setState({
          data: temp,
        });
      });
  }

  render() {
    return (
      <div className="gallery-out">
        <div className="heading">
          <h4>TOUR</h4>
          {/* <a href="">
            <i className="far fa-star"></i> Starred
          </a> */}
        </div>
        <div className="respo">
          <div className="gallery-cont">
            {this.state.data.map((i) => {
              return (
                <a href="/travel/123" className="gallery-show">
                  <img src={i.Image} alt="" />
                  <div className="content">
                    <p>{i.Name}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

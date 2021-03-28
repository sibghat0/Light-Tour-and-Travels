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
    var data = [];
    firebase
      .firestore()
      .collection("tour")
      .onSnapshot((snap) => {
        snap.docChanges().forEach((changes) => {
          var item = {};
          item.data = changes.doc.data();
          item.id = changes.doc.id;
          data.push(item);
        });
        this.setState({
          data: data,
        });
      });
  }

  render() {
    return (
      <div className="gallery-out">
        <div className="heading">
          <h4>TOUR</h4>
        </div>
        <div className="respo">
          <div className="gallery-cont">
            {this.state.data.map((item) => {
              return (
                <a href={`/travel/${item.id}`} className="gallery-show">
                  <img src={item.data.Image} alt="" />
                  <div className="content">
                    <p>{item.data.Name}</p>
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

import React, { Component } from "react";
import "./gallery.css";
import firebase from "firebase";

export default class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    firebase
      .firestore()
      .collection("gallery")
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
      <div className="gallery">
        <div className="heading">
          <h4>GALLERY</h4>
          <a href="">
            <i className="far fa-star"></i> Starred
          </a>
        </div>
        <div className="respo">
          {this.state.data.map((i) => {
            return (
              <div className="gallery-cont">
                <div className="gallery-show">
                  <img src={i.img} alt="" />
                  <div className="content">
                    <p>{i.Name}</p>
                  </div>
                </div>
                <div className="gallery-show">
                  <img src={i.img} alt="" />
                  <div className="content">
                    <p>{i.Name}</p>
                  </div>
                </div>
                <div className="gallery-show">
                  <img src={i.img} alt="" />
                  <div className="content">
                    <p>{i.Name}</p>
                  </div>
                </div>
                <div className="gallery-show">
                  <img src={i.img} alt="" />
                  <div className="content">
                    <p>{i.Name}</p>
                  </div>
                </div>
                <div className="gallery-show">
                  <img src={i.img} alt="" />
                  <div className="content">
                    <p>{i.Name}</p>
                  </div>
                </div>
                <div className="gallery-show">
                  <img src={i.img} alt="" />
                  <div className="content">
                    <p>{i.Name}</p>
                  </div>
                </div>
                <div className="gallery-show">
                  <img src={i.img} alt="" />
                  <div className="content">
                    <p>{i.Name}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

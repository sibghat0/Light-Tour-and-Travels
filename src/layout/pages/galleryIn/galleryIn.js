import React, { Component } from "react";
import "./galleryIn.css";
import firebase from "firebase";

export default class GalleryIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      star: false,
      images: [],
    };
  }

  componentDidMount() {
    firebase
      .firestore()
      .collection("gallery")
      .doc("U1tmSHYcBU4UZjLo5eYe")
      .get()
      .then((doc) => {
        this.setState({
          images: doc.data().images,
        });
      });
  }

  render() {
    return (
      <div className="galleryIn">
        <div className="heading">
          <h4>Kolkata City Tour</h4>
          <i
            className={
              this.state.star
                ? "fas fa-star golden-star"
                : "fas fa-star grey-star"
            }
            onClick={() => this.setState({ star: !this.state.star })}
          ></i>
        </div>
        <div className="body">
          {this.state.images.map((image) => {
            return <img src={image} alt="" />;
          })}
        </div>
      </div>
    );
  }
}

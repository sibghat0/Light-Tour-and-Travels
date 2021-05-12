import React, { Component } from "react";
import "./travel.css";
import firebase from "firebase";
import Lottie from "react-lottie";
import loader from "../../../loader/lf30_editor_v1fleg6c.json";

export default class TravelMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      loading: true,
    };
  }

  componentDidMount() {
    firebase
      .firestore()
      .collection("tour")
      .doc(this.props.match.params.id)
      .onSnapshot((doc) => {
        this.setState({
          data: doc.data(),
          loading: false,
        });
      });
  }

  render() {
    return (
      <div className="cars-cont">
        {this.state.loading ? (
          <Lottie
            options={{ animationData: loader }}
            height={400}
            width={400}
          />
        ) : (
          <>
            <div className="image">
              <img src={this.state.data.Image} alt="img" />
            </div>

            <div className="sec-cont">
              <div className="car-des">
                <h4>{this.state.data.Heading}</h4>
                <p>{this.state.data.Para}</p>
              </div>
              <div className="car-des">
                <h4>TOURIST ATTRACTIONS</h4>
                {this.state.data.ol.map((item) => {
                  return (
                    <div className="other">
                      <div className="section">
                        <h4>{item.olh}</h4>
                        <img src={item.img} alt="img" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

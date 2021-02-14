import React, { Component } from "react";
import "./contact.css";
import logo from "../../../assets/logo.png";
import indianCities from "indian-states-cities";
import axios from "axios";
// import toaster from "toasted-notes";
// import "toasted-notes/src/styles.css";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      states: indianCities.allStates(),
      cities: [],
      state: "",
      city: "",
      name: "",
      email: "",
      number: "",
      pincode: "",
    };
  }

  componentDidMount() {}

  handleChange = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        if (this.state.state.length > 0) {
          this.setState({
            cities: indianCities.citiesForState(this.state.state),
          });
        } else {
          this.setState({
            city: "",
          });
        }
      }
    );
  };

  // handleSendEmail = async () => {
  //   if (
  //     this.state.name.length > 0 &&
  //     this.state.email.length > 0 &&
  //     this.state.number.length > 0 &&
  //     this.state.city.length > 0 &&
  //     this.state.state.length > 0 &&
  //     this.state.pincode.length > 0
  //   ) {
  //     var data = {
  //       name: this.state.name,
  //       email: this.state.email,
  //       phone: this.state.number,
  //       city: this.state.city,
  //       state: this.state.state,
  //       pincode: this.state.pincode,
  //     };
  //     var res = await axios.post("/api/sendContactDetails/", data);
  //     if (res.data === "Success") {
  //       toaster.notify(
  //         "We have recieved your details and will contact you soon..."
  //       );
  //       this.props.close();
  //     } else {
  //       toaster.notify(
  //         "There's some error, Please try again later or call us !"
  //       );
  //     }
  //   } else {
  //     toaster.notify("We can't contact you if there's any empty field left ! ");
  //   }
  // };

  render() {
    return (
      <div className="contact-back">
        <div className="contact">
          <i className="fas fa-times" onClick={this.props.close}></i>
          <div className="contact-head">
            <div className="left">
              <img src={logo} alt="" />
            </div>
            <div className="right">
              <p>
                Email:{" "}
                <a href="mailto:mdzahid@lighttourandtravels.com">
                  mdzahid@lighttourandtravels.com
                </a>
              </p>
              <p>Phone Number</p>
              <p>
                <a href="tel:9339739777">+91 9339739777</a>
              </p>
              <p>
                <a href="tel:9874580777">+91 9874580777</a>
              </p>
            </div>
          </div>

          <div className="contact-body">
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <label
                className={this.state.name.length > 0 ? "active" : null}
                htmlFor="name"
              >
                Full Name
              </label>
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <label
                className={this.state.email.length > 0 ? "active" : null}
                htmlFor="email"
              >
                Email
              </label>
            </div>
            <div className="form-group">
              <input
                type="number"
                id="number"
                name="number"
                value={this.state.number}
                onChange={this.handleChange}
              />
              <label
                className={this.state.number > 0 ? "active" : null}
                htmlFor="number"
              >
                Phone Number
              </label>
            </div>
            <div className="twoFields">
              <select
                name="state"
                id="state"
                value={this.state.state}
                onChange={this.handleChange}
              >
                <option selected value="">
                  State
                </option>
                {this.state.states.map((state) => {
                  return <option value={state}>{state}</option>;
                })}
              </select>
              <select
                name="city"
                id="city"
                value={this.state.city}
                onChange={this.handleChange}
              >
                <option selected value="">
                  City
                </option>
                {this.state.cities.map((city) => {
                  return <option value={city}>{city}</option>;
                })}
              </select>
            </div>
            <div className="form-group">
              <input
                type="number"
                id="pincode"
                name="pincode"
                value={this.state.pincode}
                onChange={this.handleChange}
              />
              <label
                className={this.state.pincode > 0 ? "active" : null}
                htmlFor="pincode"
              >
                Pincode
              </label>
            </div>

            <div className="contact-footer">
              <button type="button" onClick={this.handleSendEmail}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

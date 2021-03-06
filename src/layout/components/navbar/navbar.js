import React, { Component } from "react";
import "./navbar.css";
import logo from "../../../assets/logo.png";
import { Modal, TextField, Button } from "@material-ui/core";
import moment from "moment";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hamburger: false,
      whiteNavbar: false,
      modal: false,
      selectedDate: "",
      email: "",
      phoneNumber: "",
      amount: "",
      name: "",
      date: "",
      error: {},
    };
  }

  componentDidMount() {
    window.onscroll = () => {
      if (window.pageYOffset >= 200) {
        this.setState({
          whiteNavbar: true,
        });
      } else {
        this.setState({
          whiteNavbar: false,
        });
      }
    };
  }

  handlePay = () => {
    console.log(this.state.date);
    if (
      this.state.email.length > 0 &&
      this.state.email.includes("@") &&
      (this.state.amount > 0 || this.state.amount.length > 0) &&
      (this.state.phoneNumber > 0 || this.state.phoneNumber.length === 0) &&
      this.state.name.length > 0
    ) {
      var options = {
        key: "rzp_test_0HSOnXJju9VR4z", // Enter the Key ID generated from the Dashboard
        amount: this.state.amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Light Tour and Travels",
        description: "Pay for your Journey",
        image: "https://example.com/your_logo",
        // order_id: "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: () => {
          this.setState({
            name: "",
            phoneNumber: "",
            amount: 0,
            date: "",
            email: "",
            error: {},
          });
        },
        prefill: {
          name: this.state.name,
          email: this.state.email,
          contact: this.state.phoneNumber,
        },
        theme: {
          color: "#F67423",
        },
      };
      this.setState({
        modal: false,
      });
      var rzp1 = new window.Razorpay(options);
      rzp1.open();
    } else {
      if (this.state.name.length === 0) {
        var error = {
          inputName: "name",
          errorMsg: "Please Enter Name",
        };
        this.setState({
          error,
        });
      } else if (
        this.state.email.length === 0 ||
        !this.state.email.includes("@")
      ) {
        var error = {
          inputName: "email",
          errorMsg: "Please Enter Proper Email",
        };
        this.setState({
          error,
        });
      } else if (
        this.state.phoneNumber === 0 ||
        this.state.phoneNumber.length === 0
      ) {
        var error = {
          inputName: "phoneNumber",
          errorMsg: "Please Enter Phone Number",
        };
        this.setState({
          error,
        });
      } else if (this.state.date.length === 0) {
        var error = {
          inputName: "date",
          errorMsg: "Please Choose a date of travel",
        };
        this.setState({
          error,
        });
      } else {
        var error = {
          inputName: "amount",
          errorMsg: "Please Enter Amount to Proceed",
        };
        this.setState({
          error,
        });
      }
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className={this.state.whiteNavbar ? "navbar white" : "navbar"}>
        <img src={logo} alt="" />
        <div className="nav">
          <a href="/">Home</a>
          <a href="/vehicles">Vehicles</a>
          <a href="/gallery">Gallery</a>
          <a href="/travel">Travels</a>
          <p className="contactButton" onClick={this.props.handleContact}>
            Contact
          </p>
          <button type="button" onClick={() => this.setState({ modal: true })}>
            <p>Make a payment</p>
            <i className="fas fa-credit-card"></i>
          </button>
        </div>
        <Modal
          open={this.state.modal}
          onClose={() => this.setState({ modal: false })}
        >
          <div className="modal">
            <h3>Make a Payment</h3>
            <div className="inputs">
              <TextField
                label="Name"
                color="primary"
                variant="outlined"
                className="input"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                helperText={
                  this.state.error.inputName === "name"
                    ? this.state.error.errorMsg
                    : null
                }
                error={this.state.error.inputName === "name"}
                size="small"
              ></TextField>
              <TextField
                label="Email"
                color="primary"
                variant="outlined"
                className="input"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                helperText={
                  this.state.error.inputName === "email"
                    ? this.state.error.errorMsg
                    : null
                }
                error={this.state.error.inputName === "email"}
                size="small"
              ></TextField>
              <TextField
                label="Phone Number"
                color="primary"
                variant="outlined"
                type="number"
                className="input"
                name="phoneNumber"
                value={this.state.phoneNumber}
                onChange={this.handleChange}
                helperText={
                  this.state.error.inputName === "phoneNumber"
                    ? this.state.error.errorMsg
                    : null
                }
                error={this.state.error.inputName === "phoneNumber"}
                size="small"
              ></TextField>
              <TextField
                label="Travel Date"
                type="date"
                color="primary"
                variant="outlined"
                className="input"
                name="date"
                onChange={this.handleChange}
                value={this.state.date}
                size="small"
                helperText={
                  this.state.error.inputName === "date"
                    ? this.state.error.errorMsg
                    : null
                }
                error={this.state.error.inputName === "date"}
                fullWidth={true}
                InputLabelProps={{ shrink: true }}
              ></TextField>
              <TextField
                label="Amount"
                color="primary"
                variant="outlined"
                className="input"
                type="number"
                name="amount"
                value={this.state.amount}
                onChange={this.handleChange}
                helperText={
                  this.state.error.inputName === "amount"
                    ? this.state.error.errorMsg
                    : null
                }
                error={this.state.error.inputName === "amount"}
                size="small"
              ></TextField>
            </div>
            <Button
              color="primary"
              variant="contained"
              onClick={this.handlePay}
            >
              Proceed
            </Button>
          </div>
        </Modal>
        <div
          className="hamburgerLines"
          onClick={() => {
            this.setState({ hamburger: true });
            document.body.style.overflow = "hidden";
          }}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div
          className={this.state.hamburger ? "hamburger active" : "hamburger"}
        >
          <i
            className="fas fa-times"
            onClick={() => {
              this.setState({ hamburger: false });
              document.body.style.overflow = "auto";
            }}
          ></i>
          <a href="/">
            <i className="fas fa-home"></i> Home
          </a>
          <a href="/vehicles">
            <i className="fas fa-car"></i> Vehicles
          </a>
          <a href="/gallery">
            <i className="fas fa-images"></i>Gallery
          </a>
          <a href="/tour">
            <i className="fas fa-route"></i>Tour
          </a>
          <a href="/travel">
            <i className="fas fa-bus"></i>Travels
          </a>
          <a href="/contact">
            <i className="fas fa-address-book"></i>Contact
          </a>
        </div>
      </div>
    );
  }
}

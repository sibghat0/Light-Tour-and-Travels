import React from "react";
import "./navbar.css";
import logo from "../../../assets/light_ultimate.png";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 1,
    };
  }

  render() {
    return (
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="image" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="#">Tours</a>
              <div className="tours">
                <div
                  className={
                    this.state.tab === 1
                      ? "inactiveLeft active"
                      : "inactiveLeft"
                  }
                >
                  <p onClick={() => this.setState({ tab: 2 })}>Domestic tour</p>
                  <p onClick={() => this.setState({ tab: 3 })}>National tour</p>
                </div>
                <div
                  className={
                    this.state.tab === 2
                      ? "inactiveRight active"
                      : "inactiveRight"
                  }
                >
                  <i
                    className="fas fa-arrow-left"
                    onClick={() => this.setState({ tab: 1 })}
                  ></i>
                  <p>Half Day Tour</p>
                  <p>Full Day Tour</p>
                  <p>North City Tour</p>
                  <p>South City Tour</p>
                </div>
                <div
                  className={
                    this.state.tab === 3
                      ? "inactiveRight2 active"
                      : "inactiveRight2"
                  }
                >
                  <i
                    className="fas fa-arrow-left"
                    onClick={() => this.setState({ tab: 1 })}
                  ></i>
                  <p>Half Day Tour</p>
                  <p>Full Day Tour</p>
                  <p>Long Trips</p>
                  <p>All India Tour</p>
                </div>
              </div>
            </li>
            <li>
              <a href="/reviews">Review</a>
            </li>
            <li>
              <a href="/vehicals">Vehicals</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

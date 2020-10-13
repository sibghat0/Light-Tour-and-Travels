import React from "react";
import "./navbar.css";
import logo from '../../../assets/light_ultimate.png'

export default class Navbar extends React.Component{
    render(){
        return(
            <div className="navbar">
                <div className="logo">
                    <img src= {logo} alt="image"/>
                </div>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Tours</a></li>
                        <li><a href="#">Review</a></li>
                        <li><a href="#">Vehicals</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
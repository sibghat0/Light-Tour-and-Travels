import React from "react";
import "./navbar.css";

export default class Navbar extends React.Component{
    render(){
        return(
            <div className="navbar">
                <div className="logo">
                    <p>Super <span>Service</span></p>
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
import React from "react";
import "./heroSection.css";

export default class HeroSection extends React.Component{
    render(){
        return(
            <div className="heroSection">
                <div className="heroText">
                    <p>One stop for all your Car related problems</p>
                    <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora,
                    dicta culpa non quis numquam natus
                    </p>
                </div>
            </div>
        )
    }
}
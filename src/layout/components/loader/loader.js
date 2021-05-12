import React from "react";
import "./loader.css";
import Lottie from "react-lottie";
import loading from "../../../loader/9921-loader.json";

export default function Loader() {
  return (
    <div className="loader">
      <Lottie options={{ animationData: loading }} height={200} width={200} />
    </div>
  );
}

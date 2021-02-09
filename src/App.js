import React from "react";
import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import Navbar from "./layout/components/navbar/navbar";
import Home from "./layout/pages/home/home";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;

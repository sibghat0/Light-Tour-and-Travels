import React from "react";
import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import Navbar from "./layout/components/navbar/navbar";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;

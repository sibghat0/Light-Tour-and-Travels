import React from "react";
import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import Navbar from "./layout/components/navbar/navbar";
import Home from "./layout/pages/home/home";
import Footer from "./layout/components/footer/footer";
import Contact from "./layout/components/pages/contact/contact";
import Cars from "./layout/components/pages/cars/cars";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* <Navbar />
      <Footer />
      <Contact /> */}
      <Cars />
    </div>
  );
}

export default App;

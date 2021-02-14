import React from "react";
import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import Navbar from "./layout/components/navbar/navbar";
import Home from "./layout/pages/home/home";
import Footer from "./layout/components/footer/footer";
import Cars from "./layout/pages/cars/cars";
import TourMe from "./layout/pages/tour/tour";
import TravelMe from "./layout/pages/travel/travel";
import Contact from "./layout/pages/contact/contact";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/vehicles" component={Cars} />
        <Route exact path="/tour" component={TourMe} />
        <Route exact path="/tour" component={TravelMe} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

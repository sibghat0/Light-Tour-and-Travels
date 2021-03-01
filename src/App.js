import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import Navbar from "./layout/components/navbar/navbar";
import Home from "./layout/pages/home/home";
import Footer from "./layout/components/footer/footer";
import Cars from "./layout/pages/cars/cars";
import TravelMe from "./layout/pages/travel/travel";
import Contact from "./layout/pages/contact/contact";
import GalleryIn from "./layout/pages/galleryIn/galleryIn";
import Gallery from "./layout/pages/gallery/gallery";
import Tour from "./layout/pages/tourOut/tourOut";

function App() {
  const [contact, setContact] = useState(false);
  useEffect(() => {
    if (contact) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [contact]);
  return (
    <div className="App">
      <Navbar
        handleContact={() => {
          setContact(true);
        }}
      />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/vehicles" component={Cars} />
        <Route exact path="/travel" component={TravelMe} />
        <Route exact path="/gallery/:id" component={GalleryIn} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/travel/:id" component={Tour} />
      </Switch>
      <Footer />
      {contact ? <Contact close={() => setContact(false)} /> : null}
    </div>
  );
}

export default App;

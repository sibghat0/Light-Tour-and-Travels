import React from 'react';
import './App.css';
import { Switch, Route, useLocation } from "react-router-dom";
import Navbar from './layout/components/navbar/navbar';
import Homepage from './layout/pages/homepage/homepage';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Navbar />
      <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Homepage}/>
      </Switch>
    </div>
  );
}

export default App;

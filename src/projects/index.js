import React from "react";
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// pages
import Reviews from "../rev/Reviews";
import About from "./About";
import Error from "./Error";
// navbar
import Navbar from "./Navbar";
import Home from "./Home";

// import './index.css'
const ReactRouterSetup = () => {
  return (
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/reviews">
              <Reviews />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </Router>
  );
};

export default ReactRouterSetup;

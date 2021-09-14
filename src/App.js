import React from "react";
import "./App.css";
import Home from "./home.js";
import Additionaldetails from "./Additionaldetails.js";
import Signup from "./Signup.js";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Navigation() {
  return (
    <Router>
      <div class="main-wrap">
        <input id="slide-sidebar" type="checkbox" role="button" />
        <label class="labelx" for="slide-sidebar">
          <img
            src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png"
            alt="x"
          />
        </label>
        <div class="sidebar">
          <h1>SiteMap</h1>

          <ul>
            <li>
              <Link style={{ textDecoration: "none" }} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} to="/Signup">
                Signup
              </Link>
            </li>
            <li style={{ display: "none" }}>
              <Link to="/Additionaldetails"> </Link>
            </li>
          </ul>
        </div>

        <div class="portfolio">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/Signup" component={Signup}></Route>
            <Route
              exact
              path="/Additionaldetails"
              component={Additionaldetails}
            ></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

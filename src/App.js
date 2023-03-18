import logo from "./logo.svg";
import "./App.css";
import propTypes from "prop-types";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class App extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };

  static propTypes = {
    country: propTypes.string,
    pageSize: propTypes.number,
    category: propTypes.string,
  };
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/Science">
              <News
                key="science"
                pageSize="6"
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/Business">
              <News
                key="business"
                pageSize="6"
                country="in"
                category="business"
              />
            </Route>
            <Route exact path="/Entertainment">
              <News
                key="entertainment"
                pageSize="6"
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/General">
              <News
                key="general"
                pageSize="6"
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/Health">
              <News key="health" pageSize="6" country="in" category="health" />
            </Route>
            <Route exact path="/Sports">
              <News key="sports" pageSize="6" country="in" category="sports" />
            </Route>
            <Route exact path="/Technology">
              <News
                keys="technology"
                pageSize="6"
                country="in"
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

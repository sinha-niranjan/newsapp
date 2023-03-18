import logo from "./logo.svg";
import "./App.css";
import propTypes from "prop-types";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";

export default class App extends Component {
  static defaultProps = {
    country : "in",
    pageSize: 6,
    category : "general"
  }

  static propTypes = {
    country : propTypes.string,
    pageSize : propTypes.number,
    category : propTypes.string,
  }
  render() {
    return (
      <div>
        <NavBar />
        <News pageSize="6" country="in" category="science"/>
      </div>
    );
  }
}

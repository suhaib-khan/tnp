import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./views/Layout";

export default class Routing extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={Layout} />
        </Router>
      </div>
    );
  }
}

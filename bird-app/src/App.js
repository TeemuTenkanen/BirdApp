import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./components/styles.css";
import frontPage from "./components/frontPage";
import viewPage from "./components/viewPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact strict component={frontPage} />
          <Route path="/viewPage" exact strict component={viewPage} />
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./components/styles.css";
import CreateNewObservation from "./components/CreateNewObservation";
import MainView from "./components/MainView";

class App extends Component {
  constructor(props) {
    super(props);

    this.addToObservationsList = this.addToObservationsList.bind(this);

    this.state = {
      observationsList: []
    };
  }

  addToObservationsList(observation) {
    const newObservationsList = [...this.state.observationsList, observation];
    this.setState({ observationsList: newObservationsList });
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Route
            path="/"
            exact
            strict
            render={props => (
              <MainView
                {...props}
                observationsList={this.state.observationsList}
              />
            )}
          />
          <Route
            path="/CreateNewObservation"
            exact
            render={props => (
              <CreateNewObservation
                {...props}
                addToObservationsList={this.addToObservationsList}
              />
            )}
          />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;

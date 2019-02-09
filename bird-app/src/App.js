import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./components/styles.css";
import CreateNewObservation from "./components/CreateNewObservation";
import MainView from "./components/MainView";
import firebase from "./components/Firebase/firebase.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.addToObservationsList = this.addToObservationsList.bind(this);

    this.state = {
      observationsList: [],
      loaded: false
    };
  }

  componentDidMount() {
    const observationRef = firebase.database().ref("observationsList");
    observationRef.on("value", snapshot => {
      let observationsList = snapshot.val();
      // Sort observation list by timestamp (timeMilliSeconds)

      this.setState({ loaded: true });
      let newState = [];
      for (let observation in observationsList) {
        newState.push({
          birdName: observationsList[observation].birdName,
          notes: observationsList[observation].notes,
          rarity: observationsList[observation].rarity,
          timeStamp: observationsList[observation].timeStamp,
          timeMilliSeconds: observationsList[observation].timeMilliSeconds,
          latitude: observationsList[observation].latitude,
          longitude: observationsList[observation].longitude,
          cityName: observationsList[observation].cityName,
          imageUrl: observationsList[observation].imageUrl,
          video: observationsList[observation].video,
          sound: observationsList[observation].sound
        });
      }
      newState.sort(function(a, b) {
        return b.timeMilliSeconds - a.timeMilliSeconds;
      });
      this.setState({
        observationsList: newState
      });
    });
  }

  addToObservationsList(observation) {
    const newObservationsList = [...this.state.observationsList, observation];
    this.setState({ observationsList: newObservationsList });
    const observationRef = firebase.database().ref("observationsList");
    observationRef.push(observation);
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
                loaded={this.state.loaded}
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

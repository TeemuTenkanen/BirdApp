import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./components/styles.css";
import CreateNewObservation from "./components/CreateNewObservation";
import MainView from "./components/MainView";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      birdCardList: []
      /*birdName: "",
      notes: "",
      rarity: "",
      lat: "",
      timeStamp: "",
      geolocation: "",
      picture: "",
      imageUrl: ""*/
    };
  }

  updateBirdCardList(list) {
    this.setState({ birdCardList: list });
  }

  render() {
    console.log(this.state);

    const childProps = {
      birdCardList: this.state.birdCardList,
      updateBirdCardList: this.updateBirdCardList
    };

    return (
      <Router>
        <React.Fragment>
          <Route
            path="/"
            exact
            strict
            component={MainView}
            childProps={childProps}
          />
          <Route path="/" exact strict component={CreateNewObservation} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;

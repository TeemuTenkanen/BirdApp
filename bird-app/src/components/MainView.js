import React, { Component } from "react";
import { Link } from "react-router-dom";
import ObservationsList from "./observationsList/ObservationsList";
import "./styles.css";

class MainView extends Component {
  constructor(props) {
    super(props);
    this.backToTop = this.backToTop.bind(this);
    window.scrollTo(0, 0);
  }

  backToTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container-fluid col-sm-8 col-md-9 col-lg-9 col-xl-4">
        <div className="row justify-content-center jumbotron">
          <h1 className="text-center ">Bird gallery</h1>
        </div>
        <Link
          className="btn btn-secondary col-12 create-new-observation-button"
          to="/CreateNewObservation"
        >
          Create new observation
        </Link>
        {!this.props.loaded && (
          <div className="container">
            <div className="row justify-content-center">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
            <br />
            <p className="row justify-content-center">
              Loading observations...
            </p>
          </div>
        )}

        <ObservationsList observationsList={this.props.observationsList} />
        <div className="row justify-content-center">
          <button className="btn btn-primary " onClick={this.backToTop}>
            Back to top
          </button>
        </div>
      </div>
    );
  }
}

export default MainView;

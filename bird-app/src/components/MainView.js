import React, { Component } from "react";
import { Link } from "react-router-dom";
import Birdcard from "./Birdcard";

class MainView extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    console.log(this.props);
    return (
      <div className="container-fluid col-lg-4">
        <div className="row justify-content-center jumbotron">
          <h1 className="text-center">Bird gallery</h1>
          <p className="text-center lead">
            Here you can see what other people have seen
          </p>
        </div>

        <div className="card">
          <img
            className="card-img-top"
            src="https://images.pexels.com/photos/326900/pexels-photo-326900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Example pic"
          />
          <div className="card-body">
            <h5 className="card-title">Bird 1</h5>
            <h6 className="card-subtitle mb-2 text-muted">Rarity</h6>
            <p className="card-text">
              I saw this bird there and there and it was this and this.
            </p>
            <p className="card-subtitle mb-2 text-muted">Timestamp</p>
            <p className="card-subtitle mb-2 text-muted">Geolocation</p>
          </div>
        </div>
        <br />
        <Link className="btn btn-secondary col-12" to="/CreateNewObservation">
          Create new observation
        </Link>
      </div>
    );
  }
}

export default MainView;

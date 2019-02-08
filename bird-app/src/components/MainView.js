import React, { Component } from "react";
import { Link } from "react-router-dom";
import ObservationsList from "./observationsList/ObservationsList";

class MainView extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container-fluid col-lg-4">
        <div className="row justify-content-center jumbotron">
          <h1 className="text-center ">Bird gallery</h1>
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
          <video className="card-img-top" controls>
            <source
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              type="video/mp4"
            />
            <source
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              type="video/ogg"
            />
            Your browser does not support the video tag.
          </video>
          <div className="card-body">
            <h5 className="card-title">Bird 1</h5>
            <h6 className="card-subtitle mb-2 text-muted">Rarity</h6>
            <p className="card-text">
              I saw this bird there and there and it was this and this.
            </p>
            <p className="card-subtitle mb-2 text-muted">Timestamp</p>
            <p className="card-subtitle mb-2 text-muted">Geolocation</p>
            <audio controls>
              <source
                src="https://www.computerhope.com/jargon/m/example.mp3"
                type="audio/ogg"
              />
              <source
                src="https://www.computerhope.com/jargon/m/example.mp3"
                type="audio/mpeg"
              />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
        <ObservationsList observationsList={this.props.observationsList} />
        <br />
        <Link className="btn btn-secondary col-12" to="/CreateNewObservation">
          Create new observation
        </Link>
      </div>
    );
  }
}

export default MainView;

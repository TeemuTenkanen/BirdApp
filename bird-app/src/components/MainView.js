import React, { Component } from "react";
import { Link } from "react-router-dom";
import ObservationsList from "./observationsList/ObservationsList";
import "./styles.css";

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
        <div className="card">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <video className="d-block w-100" alt="First slide" controls>
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
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="https://images.pexels.com/photos/326900/pexels-photo-326900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="..." alt="Third slide" />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
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
        <div className="endDiv" />
        <br />
      </div>
    );
  }
}

export default MainView;

import React, { Component } from "react";
import { Link } from "react-router-dom";

class viewPage extends Component {
  constructor(props) {
    super(props);
    this.back = this.back.bind(this);

    this.state = {};
  }

  back() {
    this.props.history.replace("/");
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <h1 className="col-11">Bird gallery</h1>
          <p className="col-11">Here you can see what other people have seen</p>
        </div>

        <div>
          <p>
            Name, rarity, notes, timestamp, geolocation, picture, video, sound
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
            <h6 class="card-subtitle mb-2 text-muted">Rarity</h6>
            <p className="card-text">
              I saw this bird there and there and it was this and this.
            </p>
            <p class="card-subtitle mb-2 text-muted">Timestamp</p>
            <p class="card-subtitle mb-2 text-muted">Geolocation</p>
          </div>
        </div>
        <br />
        <Link className="btn btn-secondary" to="/openForm">
          Create new observation
        </Link>
        <br />
        <br />
        <div className="row justify-content-center align-items-center align-self-end">
          <button
            className=" btn btn-dark back_button col-12 d-flex justify-content-center align-items-center"
            onClick={this.back}
          >
            Back
          </button>
        </div>
      </div>
    );
  }
}

export default viewPage;

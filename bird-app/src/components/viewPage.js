import React, { Component } from "react";
//import { Link } from "react-router-dom";
import Birdcard from "./Birdcard";

class viewPage extends Component {
  constructor(props) {
    super(props);
    this.back = this.back.bind(this);
    this.nextScene = this.nextScene.bind(this);
    this.previousScene = this.previousScene.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);

    this.state = {
      sceneNumber: 1,
      birdName: "",
      notes: "",
      rarity: "",
      lat: "",
      timeStamp: "",
      geolocation: ""
    };

    /* //With this I can get current latitude
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => console.log(err)
    );*/
  }

  back() {
    this.props.history.replace("/");
  }

  nextScene() {
    this.setState({ sceneNumber: this.state.sceneNumber + 1 });
  }

  previousScene() {
    this.setState({ sceneNumber: this.state.sceneNumber - 1 });
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  handleChange(e) {
    let value = e.target.value;

    this.setState({ [e.target.name]: value, messages: "" });
  }

  handleDropdown(e) {
    this.setState({
      rarity: e.target.value
    });
  }

  handleSubmit(event) {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => console.log(err)
    );
    //With this I can get current latitude
    alert("Your sight was submitted");
    this.setState({ timeStamp: Date().toString() });
    this.setState({ geolocation: this.state.lat });
    this.setState({ sceneNumber: 1 });
    event.preventDefault();
    return (
      <Birdcard
        birdName={this.state.birdName}
        rarity={this.state.rarity}
        notes={this.state.notes}
        timeStamp={this.state.timeStamp}
        geolocation={this.state.lat}
      />
    );
  }

  render() {
    return (
      <div className="container-fluid">
        {this.state.sceneNumber === 1 ? (
          <div>
            <div className="row justify-content-center">
              <h1 className="col-11">Bird gallery</h1>
              <p className="col-11">
                Here you can see what other people have seen
              </p>
            </div>

            <div>
              <p>
                Name, rarity, notes, timestamp, geolocation, picture, video,
                sound
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
            <Birdcard
              birdName={this.state.birdName}
              rarity={this.state.rarity}
              notes={this.state.notes}
              timeStamp={this.state.timeStamp}
              geolocation={this.state.lat}
            />
            <br />
            <button className="btn btn-secondary" onClick={this.nextScene}>
              Create new observation
            </button>
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
        ) : null}

        {this.state.sceneNumber === 2 ? (
          <div>
            <div className="row justify-content-center">
              <h1 className="col-11">Form</h1>
              <p className="col-11">Here you can fill the new sight</p>
            </div>
            <div className="row justify-content-center">
              <form>
                <div className="form-group">
                  <label>Name of the bird</label>
                  <input
                    name="birdName"
                    type="text"
                    className="form-control"
                    placeholder="Write the name of the bird"
                    value={this.state.birdName}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Rarity of the bird</label>
                  <select
                    className="form-control"
                    value={this.state.rarity}
                    onChange={this.handleDropdown}
                  >
                    <option value="Common">Common</option>
                    <option value="Rare">Rare</option>
                    <option value="Extremely rare">Extremely rare</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Notes</label>
                  <input
                    name="notes"
                    type="text"
                    className="form-control"
                    placeholder="Write your notes here"
                    value={this.state.notes}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Add picture</label>
                  <input
                    name="picture"
                    type="file"
                    accpet="image/png, image/jpeg"
                    alt="Submit"
                    className="form-control-file"
                    placeholder="Write your notes here"
                    onChange={this.handleChange}
                  />
                </div>
                <button className="btn btn-primary" onClick={this.handleSubmit}>
                  Submit
                </button>
              </form>
            </div>
            <br />
            <br />
            <div className="row justify-content-center align-items-center align-self-end">
              <button
                className=" btn btn-dark back_button col-12 d-flex justify-content-center align-items-center"
                onClick={this.previousScene}
              >
                Back
              </button>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default viewPage;

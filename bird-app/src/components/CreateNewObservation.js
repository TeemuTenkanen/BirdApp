import React, { Component } from "react";
import { Link } from "react-router-dom";

class CreateNewObservation extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleVideoChange = this.handleVideoChange.bind(this);
    this.handleSoundChange = this.handleSoundChange.bind(this);

    this.state = {
      birdName: "",
      notes: "",
      rarity: "",
      timeStamp: "",
      latitude: "",
      longitude: "",
      cityName: "",
      geolocation: "",
      imageUrl: "",
      video: "",
      sound: ""
    };

    //With this I can get current latitude and logitude
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ longitude: position.coords.longitude });
        this.setState({ latitude: position.coords.latitude });
      },
      err => console.log(err)
    );
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

  handleImageChange(e) {
    let reader = new FileReader();
    let picture = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        imageUrl: reader.result
      });
    };
    reader.readAsDataURL(picture);
  }

  handleVideoChange(e) {
    let reader = new FileReader();
    let video = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        video: reader.result
      });
    };
    reader.readAsDataURL(video);
  }

  handleSoundChange(e) {
    let reader = new FileReader();
    let sound = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        sound: reader.result
      });
    };
    reader.readAsDataURL(sound);
  }

  handleSubmit(event) {
    event.preventDefault();
    // Try to get city name from lat and long with curren weather map api
    // WORKING ON!!!
    /*var cityUrl =
      "api.openweathermap.org/data/2.5/weather?lat=" +
      this.state.latitude +
      "&lon=" +
      this.state.longitude;

    const url1 = cityUrl;
    const city = GetData(url1);*/

    const newObservations = {
      birdName: this.state.birdName,
      notes: this.state.notes,
      rarity: this.state.rarity,
      timeStamp: Date().toString(),
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      imageUrl: this.state.imageUrl,
      video: this.state.video,
      sound: this.state.sound
    };

    this.props.addToObservationsList(newObservations);

    this.props.history.push("/");
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid col-lg-4">
          <div className="row justify-content-center jumbotron">
            <h1 className="col-11 text-center">Form</h1>
            <p className="col-11 text-center lead">
              Here you can fill the new sight
            </p>
          </div>
          <div className="row justify-content-center m-5">
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
                <br />
                <input type="file" onChange={this.handleImageChange} />
              </div>
              <div className="form-group">
                <label>Add Video </label>
                <br />
                <input type="file" onChange={this.handleVideoChange} />
              </div>
              <div className="form-group">
                <label>Add sound record </label>
                <br />
                <input type="file" onChange={this.handleSoundChange} />
              </div>
              <button className="btn btn-primary" onClick={this.handleSubmit}>
                Submit
              </button>
            </form>
          </div>
          <br />
          <Link className=" btn btn-dark col-12" to="/">
            Back
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default CreateNewObservation;

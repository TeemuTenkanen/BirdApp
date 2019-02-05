import React, { Component } from "react";
import { Link } from "react-router-dom";

class CreateNewObservation extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);

    this.state = {
      birdName: "",
      notes: "",
      rarity: "",
      lat: "",
      timeStamp: "",
      geolocation: "",
      picture: "",
      imageUrl: ""
    };

    //With this I can get current latitude
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
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
        picture: picture,
        imageUrl: reader.result
      });
    };
    reader.readAsDataURL(picture);
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
    this.setState({
      timeStamp: Date().toString(),
      geolocation: this.state.lat
    });
    event.preventDefault();
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
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
                <input type="file" onChange={this.handleImageChange} />
              </div>
              <button className="btn btn-primary" onClick={this.handleSubmit}>
                Submit
              </button>
            </form>
          </div>
          <br />
          <br />
          <div className="row justify-content-center align-items-center align-self-end">
            <Link
              className=" btn btn-dark back_button col-12 d-flex justify-content-center align-items-center"
              to="/"
            >
              Back
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CreateNewObservation;

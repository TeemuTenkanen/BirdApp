import React, { Component } from "react";
import { Link } from "react-router-dom";

class frontPage extends Component {
  constructor(props) {
    super(props);
    this.back = this.back.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = { toggleForm: true, birdName: "", notes: "" };
  }

  back() {
    this.props.history.replace("/");
  }

  handleChange(e) {
    let value = e.target.value;

    this.setState({ [e.target.name]: value, messages: "" });
  }

  handleSubmit(event) {
    alert("A thing was submitted: ");
    event.preventDefault();
  }

  render() {
    return (
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
                onChange={this.handleChange}
              >
                <option>Common</option>
                <option>Rare</option>
                <option>Extremely rare</option>
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
      </div>
    );
  }
}

export default frontPage;

import React, { Component } from "react";
import { Link } from "react-router-dom";

class frontPage extends Component {
  state = {};

  render() {
    return (
      <div>
        <div className="jumbotron text-center">
          <h1>Bird app</h1>
          <p>Welcome to use the Bird app</p>
        </div>
        <div className="container-fluid ">
          <div className="front_page_container">
            <div className="start_button_container">
              <div className="row justify-content-center align-items-center">
                <Link
                  className="start_button col-11 d-flex justify-content-center align-items-center"
                  to="/viewPage"
                >
                  START
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default frontPage;

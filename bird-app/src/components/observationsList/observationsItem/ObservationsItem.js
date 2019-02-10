import React from "react";
import "../../../components/styles.css";

const ObservationsItem = props => {
  let videoTag;
  // checks if video prop is empty, if empty stops showing teh video screen
  if (props.observation.video === "") {
    videoTag = <p hidden />;
  } else {
    videoTag = (
      <video className="videoTag" style={{ width: "40%" }} controls alt="">
        <source src={props.observation.video} type="video/mp4" />
        <source src={props.observation.video} type="video/ogg" />
        Your browser does not support the video element.
      </video>
    );
  }
  let audioTag;
  // checks if video prop is empty, if empty stops showing teh video screen
  if (props.observation.sound === "") {
    audioTag = <p hidden />;
  } else {
    audioTag = (
      <audio className="audioTag" controls>
        <source src={props.observation.sound} type="audio/ogg" />
        <source src={props.observation.sound} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    );
  }
  return (
    <li>
      <div className="card">
        <img className="card-img-top" src={props.observation.imageUrl} alt="" />

        <div className="card-body">
          <h5 className="card-title">{props.observation.birdName}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {props.observation.rarity}
          </h6>
          <p className="card-text">Notes:</p>
          <p className="card-text">{props.observation.notes} </p>
          {audioTag}
          <br />
          {videoTag}
          <div className="space" />
          <p className="card-subtitle mb-2 text-muted">
            <small> {props.observation.timeStamp}</small>
          </p>
          <p className="card-subtitle mb-2 text-muted">
            <small> Latitude: {props.observation.latitude}</small>
          </p>
          <p className="card-subtitle mb-2 text-muted">
            <small>Longitude: {props.observation.longitude}</small>
          </p>
          <p className="card-subtitle mb-2 text-muted">
            <small> {props.observation.cityName}</small>
          </p>
        </div>
      </div>
      <div className="endDiv" />
    </li>
  );
};

export default ObservationsItem;

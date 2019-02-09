import React from "react";
import "../../../components/styles.css";

const ObservationsItem = props => {
  let videoTag;
  // checks if video prop is empty, if empty stops showing teh video screen
  if (props.observation.video === "") {
    videoTag = <p hidden />;
  } else {
    videoTag = (
      <video className="card-img-top" controls alt="">
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
      <audio controls>
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
        {videoTag}
        <div className="card-body">
          <h5 className="card-title">{props.observation.birdName}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {props.observation.rarity}
          </h6>
          <p className="card-text">{props.observation.notes} </p>
          <p className="card-subtitle mb-2 text-muted">
            {props.observation.timeStamp}
          </p>
          <p className="card-subtitle mb-2 text-muted">
            latitude: {props.observation.latitude}
          </p>
          <p className="card-subtitle mb-2 text-muted">
            Longitude: {props.observation.longitude}
          </p>
          <p className="card-subtitle mb-2 text-muted">
            {props.observation.cityName}
          </p>
          {audioTag}
        </div>
      </div>
      <div className="endDiv" />
    </li>
  );
};

export default ObservationsItem;

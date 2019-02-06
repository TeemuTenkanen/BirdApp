import React from "react";

const ObservationsItem = props => {
  return (
    <li>
      <div className="card">
        <img
          className="card-img-top"
          src={props.observation.imageUrl}
          alt="Example pic"
        />
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
            {props.observation.lat}
          </p>
        </div>
      </div>
    </li>
  );
};

export default ObservationsItem;

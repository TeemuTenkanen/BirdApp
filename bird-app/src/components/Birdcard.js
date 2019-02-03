import React from "react";

const Birdcard = props => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.birdName}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.rarity}</h6>
        <p className="card-text">{props.notes} </p>
        <p className="card-subtitle mb-2 text-muted">{props.timeStamp}</p>
        <p className="card-subtitle mb-2 text-muted">{props.geolocation}</p>
      </div>
    </div>
  );
};

export default Birdcard;

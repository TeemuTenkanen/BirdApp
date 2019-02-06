import React from "react";
import ObservationsItem from "./observationsItem/ObservationsItem";
import "../styles.css";

const ObservationsList = props => {
  const listItems = props.observationsList.map(observation => {
    return (
      <ObservationsItem key={observation.timeStamp} observation={observation} />
    );
  });
  return <ul className="observations-list">{listItems}</ul>;
};

export default ObservationsList;

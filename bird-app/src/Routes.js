import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateNewObservation from "./components/CreateNewObservation";
import MainView from "./components/MainView";

const Routes = childProps => {
  console.log(childProps);
  return (
    <React.Fragment>
      <Route
        path="/"
        exact
        strict
        // component={MainView}
        // render={<MainView {...childProps} />}
      />
      <Route
        path="/CreateNewObservation"
        exact
        strict
        component={CreateNewObservation}
        props={childProps}
      />
    </React.Fragment>
  );
};

export default Routes;

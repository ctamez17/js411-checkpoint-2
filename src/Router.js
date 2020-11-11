import React from "react";
import { Switch, Route } from "react-router";
// Write component imports here //
// import Home from "./components/Home";
import about from "./components/about";
import listings from "./containers/listings";
// import Test from "./components/Test"
// import Cars from "./components/Car"

// Start Router function here //
const Router = () => {
  return (
    <Switch>
      {/* <Route exact path="/" component={home} /> */}
      <Route path="/about" component={about} />
      <Route exact path="/" component={listings} />
    </Switch>
  );
};

export default Router;
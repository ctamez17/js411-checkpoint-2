import React from "react";
import { Switch, Route } from "react-router";
import about from "./components/about";
import listings from "./containers/listings";
import details from "./containers/details";


const Router = () => {
  return (
    <Switch>
      <Route path="/about" component={about} />
      <Route exact path="/" component={listings} />
      <Route path="/details/:id" component={details} />
    </Switch>
  );
};

export default Router;
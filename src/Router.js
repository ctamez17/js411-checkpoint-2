import React from "react";
import { Switch, Route } from "react-router";
import about from "./components/about";
import listings from "./containers/listings";
import details from "./containers/details";
import login from "./containers/login";

const Router = () => {
  return (
    <Switch>
      <Route path="/about" component={about} />
      <Route exact path="/" component={listings} />
      <Route path="/details/:id" component={details} />
      <Route path="/login" component={login} />
    </Switch>
  );
};

export default Router;

import React from "react";
import { Route, Switch } from "react-router-dom";
import registro from "../components/registro/register";
import list from "../components/list/list.js";
import update from "../components/update/update.js";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={registro} />
      <Route exact path="/list" component={list} />
      <Route exact path="/update/:id" component={update} />
    </Switch>
  );
};

export default Routes;

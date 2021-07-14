import React from "react";
import { Route, Switch } from "react-router-dom";

import {
  Calendar,
  Create,
  Disclaimer,
  Market,
  Home,
  Swap,
  Pool,
  Withdraw,
} from "./pages";

const Router = () => {
  return (
    <Switch>
      <Route path={"/"} exact>
        <Home />
      </Route>
      <Route path={"/swap"} exact>
        <Swap />
      </Route>
      <Route path={"/pool"} exact>
        <Pool />
      </Route>
      <Route path={"/create"} exact>
        <Create />
      </Route>
      <Route path={"/calendar"} exact>
        <Calendar />
      </Route>
      <Route path={"/withdraw"} exact>
        <Withdraw />
      </Route>
      <Route path={"/disclaimer"} exact>
        <Disclaimer />
      </Route>
      <Route path={"/market"} exact>
        <Market />
      </Route>
    </Switch>
  );
};

export default Router;

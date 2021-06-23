import React from "react";
import { Route, Switch } from "react-router-dom";

import {
  HomeScreen,
  SwapScreen,
  PoolScreen,
  CreateScreen,
  CalendarScreen,
  WithdrawScreen,
  DisclaimerScreen,
} from "./screens";

const Router = () => {
  return (
    <Switch>
      <Route path={"/"} exact>
        <HomeScreen />
      </Route>
      <Route path={"/swap"} exact>
        <SwapScreen />
      </Route>
      <Route path={"/pool"} exact>
        <PoolScreen />
      </Route>
      <Route path={"/create"} exact>
        <CreateScreen />
      </Route>
      <Route path={"/calendar"} exact>
        <CalendarScreen />
      </Route>
      <Route path={"/withdraw"} exact>
        <WithdrawScreen />
      </Route>
      <Route path={"/disclaimer"} exact>
        <DisclaimerScreen />
      </Route>
    </Switch>
  );
};

export default Router;

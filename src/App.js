import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./components/Layout";
import { Home } from "./screens";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path={"/"} exact>
            <Home />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;

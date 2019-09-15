import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "../pages/main";
import Transactions from "../pages/transactions";

const Routes = () => (
  <>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/transactions" component={Transactions} />
    </Switch>
  </>
);

export default Routes;

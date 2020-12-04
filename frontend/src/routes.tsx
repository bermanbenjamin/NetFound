import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Quests from "./pages/Quests/Quests";
import Recomendation from "./pages/Recomendation/Recomendation";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/quests" component={Quests} />
        <Route path="/recomendation" component={Recomendation} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

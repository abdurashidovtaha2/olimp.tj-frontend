import React from "react";
import { Router, Switch, Route, Link } from "react-router-dom";
import FrontPage from "./FrontPage";
import { Routes } from "../routes";
import history from "../history";
import MMT from "./MMT";
import MMTCategory from "./MMTCategory";
import MMTQuestion from "./MMTQuestion";
import { SignUp } from "../components/SignUp";
import { LogInAdmin } from "../components/LogInAdmin";
import { Header } from "../components/Header";

export const App: React.FC = () => {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route exact path={Routes.root} component={FrontPage} />
        <Route exact path={Routes.signup} component={SignUp}></Route>
        <Route exact path={Routes.admin} component={LogInAdmin}></Route>
        <Route exact path={Routes.mmt} component={MMT} />
        <Route exact path={Routes.category} component={MMTCategory}/>
        <Route path={Routes.question} component={MMTQuestion}/>
      </Switch>
    </Router>
  )
}
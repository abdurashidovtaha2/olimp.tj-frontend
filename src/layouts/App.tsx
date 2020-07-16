import React, { useState } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { Routes } from "../routes";
import history from "../history";
import FrontPage from "./FrontPage";
import MMT from "./MMT";
import MMTQuestion from "./MMTQuestion";
import { SignUp } from "../components/SignUp";
import { LogIn } from "../components/LogIn";
import { LogInAdmin } from "../components/LogInAdmin";
import { Header } from "../components/Header";
import { Modal } from "../shared/components/Modal";

export const App: React.FC = () => {
  const [authState, setAuthState] = useState<string | null>(null);
  const triggerModal = (value: string | null): void => {
    setAuthState(value);
  }

  return (
    <Router history={history}>
      <Header triggerModal={triggerModal}/>
      <Modal isModal={authState !== null}>
        {authState === "logIn" && <LogIn triggerModal={triggerModal} />}
        {authState === "signUp" && <SignUp triggerModal={triggerModal}/>}
      </Modal>
      <Switch>
        <Route exact path={Routes.root} component={FrontPage} />
        <Route exact path={Routes.admin} component={LogInAdmin} />
        <Route path={Routes.mmt} component={MMT} />
      </Switch>
    </Router>
  )
}
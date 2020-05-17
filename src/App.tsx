import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AuthScreen } from "@/screens/AuthScreen";
import { ToDoListScreen } from "@/screens/ToDoListScreen";
import { Error404Screen } from "@/screens/Error404Screen";

export const App: React.FC<{}> = () => (
  <Router>
    <Switch>
      <Route path="/auth">
        <AuthScreen />
      </Route>
      <Route path="/todo/:name" component={ToDoListScreen} />
      <Redirect exact from="/" to="/auth" />
      <Route path="*">
        <Error404Screen />
      </Route>
    </Switch>
  </Router>
);

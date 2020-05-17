import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthScreen } from "@/screens/AuthScreen";
import { ToDoListScreen } from "@/screens/ToDoListScreen";
import { Error404Screen } from "@/screens/Error404Screen";
import { UserScreen } from "@/screens/UserScreen";
export const App: React.FC<{}> = () => (
  <Router>
    <Switch>
      <Route path="/auth">
        <AuthScreen />
      </Route>

      <Route path="*">
        <Error404Screen />
      </Route>
    </Switch>
  </Router>
);

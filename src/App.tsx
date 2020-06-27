import React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AuthScreen } from "@/screens/AuthScreen";
import { ToDoListScreen } from "@/screens/ToDoListScreen";
import { Error404Screen } from "@/screens/Error404Screen";

import { Auth } from "@/components";

import { store } from "@/AppStore";

export const App: React.FC<{}> = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/todo" component={ToDoListScreen} />
        <Redirect exact from="/" to="/auth" />
        <Route path="*">
          <Error404Screen />
        </Route>
      </Switch>
    </Router>
  </Provider>
);

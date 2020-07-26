import React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Auth, Error404, ToDoScreen, User } from "@/components";
import { store } from "@/AppStore";

export const App: React.FC<{}> = () => (
  <Provider store={store}>
    <Router>
      <User />
      <Switch>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/todo" render={() => <ToDoScreen />} />
        <Redirect exact from="/" to="/auth" />
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </Router>
  </Provider>
);

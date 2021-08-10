import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {ActorsContainer} from "./containers/ActorsContainer/ActorsContainer";
import {LoginContainer} from "./containers/LoginContainer/LoginContainer";

export const App = () => {
  return (
      <Router>
          <Route exact path="/">
              <ActorsContainer />
          </Route>
          <Route path="/login">
              <LoginContainer />
          </Route>
      </Router>
  );
}

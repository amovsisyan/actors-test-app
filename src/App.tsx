import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {ActorsContainer} from "./containers/ActorsContainer/ActorsContainer";
import {LoginContainer} from "./containers/LoginContainer/LoginContainer";
import {SpotifyLogin} from "./containers/SpotifyLogin/SpotifyLogin";
import {Redirect} from "./containers/Redirect/Redirect";
import {PrivateRoute} from "./containers/PrivateRoute";

export const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <LoginContainer/>
                </Route>
                <Route path="/spotify_login">
                    <SpotifyLogin/>
                </Route>
                <Route path="/redirect">
                    <Redirect/>
                </Route>
                <PrivateRoute path="/" component={ActorsContainer} />
            </Switch>
        </Router>
    );
}

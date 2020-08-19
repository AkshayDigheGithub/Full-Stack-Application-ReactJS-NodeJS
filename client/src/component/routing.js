import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import ManagerSignComponent from './manager.sign.component';
import HomeComponent from './home.component';
import ManagerLoginComponent from './manger.login.component';
import NotFoundComponent from './404-notfound';
import PrivateRoute from './privateRoute';


export default function Main() {
    // const isLoggedIn = localStorage.getItem('user')
    return (
        <Router>
            <div>
                <Switch>
                    <PrivateRoute exact path="/" component={HomeComponent} />
                    <Route path="/sign" component={ManagerSignComponent} />
                    <Route path="/login" component={ManagerLoginComponent} />
                    <Route path="*" component={NotFoundComponent} />
                </Switch>
            </div>
        </Router>
    )
}
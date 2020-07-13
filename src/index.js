import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import * as serviceWorker from './serviceWorker';
import {Switch, BrowserRouter as Router, Route, BrowserRouter, Redirect} from 'react-router-dom';
import LinkedAccount from './linked-account/LinkedAccount'
import Login from './Login/Login'
import Home from './Home/Home'

ReactDOM.render(
  (<BrowserRouter>
    <Router>
      <Switch>
        <Route path="/linked-account" component={LinkedAccount} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} exact>
          {
            localStorage.getItem("spotify-token") !== null ?
              <Redirect to="/home" /> : 
              <Login></Login>
          }
        </Route>
        <Route path="/" component={Login} exact>
          {
            localStorage.getItem("spotify-token") !== null ?
              <Redirect to="/home" /> : 
              <Redirect to="/login" />
          }
        </Route>
      </Switch>
    </Router>
  </BrowserRouter>),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

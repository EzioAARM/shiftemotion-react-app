import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import * as serviceWorker from './serviceWorker';
import {Switch, BrowserRouter as Router, Route, BrowserRouter} from 'react-router-dom';
import LinkedAccount from './linked-account/LinkedAccount'
import Login from './Login/Login'
import Home from './Home/Home'

ReactDOM.render(
  (<BrowserRouter>
    <Router>
      <Switch>
        <Route path="/linked-account" component={LinkedAccount} />
        <Route path="/" exact>
          {
            localStorage.getItem("user-mail") !== null ?
              <Home></Home> : 
              <Login></Login>
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

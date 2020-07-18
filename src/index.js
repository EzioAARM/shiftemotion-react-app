import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import * as FilePond from 'filepond'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginFileEncode from 'filepond-plugin-file-encode'
import * as serviceWorker from './serviceWorker';
import {Switch, BrowserRouter as Router, Route, BrowserRouter} from 'react-router-dom';
import LinkedAccount from './linked-account/LinkedAccount'
import Login from './Login/Login'
import Home from './Home/Home'
import Historial from './Historial/Historial'
import Perfil from './Perfil/Perfil'
import Recomendar from './Recomendacion/Recomendar';

FilePond.registerPlugin(FilePondPluginImagePreview)
FilePond.registerPlugin(FilePondPluginFileEncode)

ReactDOM.render(
  (<BrowserRouter>
    <Router>
      <Switch>
        <Route path="/linked-account" component={LinkedAccount} />
        <Route path="/" exact>
          {
            localStorage.getItem("shiftemotiontoken") !== null && localStorage.getItem("user-email") !== null ?
              <Home /> : 
              <Login />
          }
        </Route>
        <Route path="/historial">
          {
            localStorage.getItem("shiftemotiontoken") !== null && localStorage.getItem("user-email") !== null ?
              <Historial /> : 
              <Login />
          }
        </Route>
        <Route path="/perfil">
          {
            localStorage.getItem("shiftemotiontoken") !== null && localStorage.getItem("user-email") !== null ?
              <Perfil /> : 
              <Login />
          }
        </Route>
        <Route path="/recomendar">
          {
            localStorage.getItem("shiftemotiontoken") !== null && localStorage.getItem("user-email") !== null ?
              <Recomendar /> : 
              <Login />
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

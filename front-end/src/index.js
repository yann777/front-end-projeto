import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from '../src/Login/index.jsx';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';


const routing = (
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={Login}></Route>
      </Switch>
    </Router>
  </React.StrictMode>

)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

reportWebVitals();
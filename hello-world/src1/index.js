import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import App2 from './App2';
import './index.css';
import { Router, Route, hashHistory } from 'react-router';

ReactDOM.render(
    (
        <Router history={hashHistory}>
            <Route path="about" component={App}/>
            <Route path="repos" component={App2}/>
        </Router>
    ),
  document.getElementById('root')
);

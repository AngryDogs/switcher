import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './landing';
import Dashboard from './dashboard';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import rootReducer from './api/root';

import "./index.css";

const devTools = window.devToolsExtension ? window.devToolsExtension() : (variable) => variable;
const finalCreateStore = compose(applyMiddleware(thunk), devTools)(createStore);
const store = finalCreateStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

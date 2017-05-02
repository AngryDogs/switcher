import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './landing';
import Dashboard from './dashboard';
import Login from './login';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import './index.scss';

import rootReducer from './api/root';

const devTools = window.devToolsExtension ? window.devToolsExtension() : (variable) => variable;
const finalCreateStore = compose(applyMiddleware(thunk), devTools)(createStore);
const store = finalCreateStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

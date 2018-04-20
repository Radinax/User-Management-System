import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {createStore, compose} from 'redux';
import {Provider} from 'react-redux';
import combineReducer from './reducers/combineReducers'

const middlewares = [];

if (window.devToolsExtension) {
  middlewares.push(window.devToolsExtension());
}

const store = createStore(
  combineReducer,
  compose(...middlewares)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'));
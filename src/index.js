import React from 'react';
import ReactDOMClient from "react-dom/client";
import {Provider, connect} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';

import App2 from "./containers/App2";
import reportWebVitals from './reportWebVitals';
import 'tachyons'; //bootstrap like styles

import {searchRobots, requestRobots} from './reducers';
const logger = createLogger();
const rootReducer = combineReducers({searchRobots, requestRobots});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

const rootElem = ReactDOMClient.createRoot(document.getElementById("root"));
rootElem.render(
  <React.StrictMode>
    <Provider store={store}>
      <App2 />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

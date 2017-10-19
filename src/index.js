import './index.css';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from 'redux';
import allReducers from './reducers';



//our main application store
const store = createStore(allReducers);

ReactDOM.render(
  <h1>Hey Now</h1>, document.getElementById('root'));;

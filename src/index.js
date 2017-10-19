import './index.css';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";

//the Provider
import {Provider} from 'react-redux';

import {createStore} from 'redux';
import allReducers from './reducers';

//components
import App from './components/app';


//our main application store
const store = createStore(allReducers);

ReactDOM.render(
      <Provider store = {store}>
      <App/>
       </Provider>
, document.getElementById('root'));;

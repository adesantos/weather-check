import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import { Provider } from 'react-redux';
import {store} from './store/store';
import './css/styles.css';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
serviceWorker.register();
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as Actions from './actions/session_actions';//TEST

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.login = Actions.login; //TEST
  window.signup = Actions.signup; //TEST
  window.getState = store.getState; //TEST
  window.dispatch = store.dispatch; //TEST
  ReactDOM.render(<Root store={store}/>, root);
});

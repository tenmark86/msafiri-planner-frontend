import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
// anything in Provider has access to redux store
// applyMiddleware incorporate thunk with our store
// compose allows us to combine middlewares into one so we can pass one argument to createStore
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import tripReducer from './reducers/tripReducer';
import { BrowserRouter as Router} from 'react-router-dom';

import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// set up store, import provider to use redux
let store = createStore(tripReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store = {store}>
      <Router>
        <App />
      </Router>
  </Provider>,
  document.getElementById('root')
);

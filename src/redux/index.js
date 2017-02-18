import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import plaintext from './plaintext';
import highlightedCard from './highlightedCard';

let store = null;
export default function getStore() {
  if (!store) {
    let logger = createLogger({
      collapsed: true
    });

    const reducers = combineReducers({
      plaintext,
      highlightedCard
    });

    store = createStore(reducers, applyMiddleware(thunk, logger));
  }

  return store;
}

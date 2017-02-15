import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

import plaintext from './plaintext';

let store = null;
export default function getStore() {
  if (!store) {
    let logger = createLogger({
      collapsed: true
    });

    const reducers = combineReducers({
      plaintext
    });

    store = createStore(reducers, applyMiddleware(logger));
  }

  return store;
}

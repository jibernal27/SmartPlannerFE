import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import SmartPlanner from './components/SmartPlanner';
//import reducers from './reducers';
/*
const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd(action.type);
  return result;
}

const createStoreWithMiddleware = applyMiddleware(logger)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <SmartPlanner />
  </Provider>
  , document.querySelector('.container'));
*/
ReactDOM.render(<SmartPlanner />, document.querySelector('.container'));

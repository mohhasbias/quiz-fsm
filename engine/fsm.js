// @flow
import JSM from 'javascript-state-machine';
import { createStore as _createStore, combineReducers, applyMiddleware } from 'redux';
import assign from 'lodash/assign';
import { createActions, handleActions } from 'redux-actions';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export const createStore = (...args: any) => {
  const store = _createStore(
    ...args, 
    composeWithDevTools(
      applyMiddleware(thunk),
    )
  );

  return assign(store, {
    getData: store.getState,
  });
}

export const combineUpdater = combineReducers;

export const createFSM = (definitions: any) => {
  return new JSM(definitions);
};

export { 
  createActions,
  handleActions
};
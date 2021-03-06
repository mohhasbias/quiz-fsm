// @flow
// @jsx element
import { element, createApp } from 'deku';
import _ from 'lodash';

import { createFSM, createStore, combineUpdater, createActions, handleActions } from './engine/fsm';
import transitions from './transitions';
import actions from './actions';
import App from './App';

// definition
const fsm = createFSM({
  transitions
});

const initialState = {
  fsm,
  currentState: 'none',
  history: [],
};

const fsmTransition = handleActions({
  [actions.fsm.changeState]: (state, action) => (_.assign({}, state, {
    fsm: action.payload.fsm,
    currentState: action.payload.to,
    history: [
      ...state.history,
      {
        from: action.payload.from,
        to: action.payload.to,
        name: action.payload.name
      }
    ]
  })),
},
initialState);

const store = createStore(combineUpdater({
  fsmTransition,
}));

const app = createApp(document.getElementById('app'), store.dispatch);

const render = () => {
  app(
    <App />,
    { data: store.getData() }
  );
};

// maintenance
store.subscribe(() => {
  render();
});

// initial app start
render();

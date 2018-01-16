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
  // transitions: [
  //   { name: 'init', from: 'none', to: 'quiz1' },
  //   // { name: 'cekJawaban', from: 'quiz1', to: (data) => data.jawabanBenar ? 'quiz2' : 'quiz1' }
  //   { name: 'cekJawaban', from: 'quiz1', to: 'quiz2' }
  // ]
  transitions
});

const initialState = {
  currentState: 'none',
  history: [],
};

const fsmTransition = handleActions({
  [actions.fsm.changeState]: (state, action) => ({
    currentState: action.payload.to,
    history: [
      ...state.history,
      {
        from: action.payload.from,
        to: action.payload.to,
        name: action.payload.name
      }
    ]
  }),
},
initialState);

const store = createStore(combineUpdater({
  fsmTransition,
}));

const app = createApp(document.getElementById('app'), store.dispatch);

const render = () => {
  app(
    <App />,
    {
      data: store.getData(),
      fsm
    }
  );
};

// maintenance
store.subscribe(() => {
  render();
});

// initial app start
render();

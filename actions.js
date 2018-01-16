import { createActions } from './engine/fsm';
import _ from 'lodash';

const actions = createActions({
  FSM: {
    CHANGE_STATE: _.identity,
  }
});

actions.fsm.init = () => (dispatch, getState) => {
  const { fsm } = getState().fsmTransition;
  fsm.onAfterTransition = (lifecycle) => dispatch(actions.fsm.changeState({
    fsm,
    ...lifecycle
  }));
  fsm.init();
};

// actions.fsm.cekJawaban = (fsm, data) => (dispatch) => {
//   fsm.cekJawaban(data);
// };

// actions.fsm.startOver = (fsm) => (dispatch) => {
//   fsm.startOver();
// }

actions.fsm = new Proxy(actions.fsm, {
  get: (target, name, receiver) => {
    if (name in target) {
      return target[name];
    } else {
      return ( _ , ...args) => (dispatch, getState) => {
        const { fsm } = getState().fsmTransition;
        if (name in fsm) {
          fsm[name](...args);
        }
      }
    }
  }
});

export default actions;

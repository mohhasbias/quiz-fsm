import { createActions } from './engine/fsm';
import _ from 'lodash';

const actions = createActions({
  FSM: {
    CHANGE_STATE: _.identity,
  }
});

actions.fsm.init = (fsm) => (dispatch) => {
  fsm.onAfterTransition = (lifecycle) => dispatch(actions.fsm.changeState(lifecycle));
  fsm.init();
};

actions.fsm.cekJawaban = (fsm, data) => (dispatch) => {
  fsm.cekJawaban(data);
};

actions.fsm.startOver = (fsm) => (dispatch) => {
  fsm.startOver();
}

export default actions;

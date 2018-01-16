// @flow
// @jsx element
import { element } from 'deku';

import actions from '../../actions';

const Quiz1 = (model: any) => {
  const {
    dispatch,
    context: {
      fsm,
      data
    }
  } = model;

  return (
    <div>
      <h1>Quiz 1</h1>
      <button onClick={() => dispatch(actions.fsm.cekJawaban(fsm, data))} >
        Next
      </button>
    </div>
  );
};

export default Quiz1;
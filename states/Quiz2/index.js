// @flow
// @jsx element
import { element } from 'deku';

import actions from '../../actions';

const Quiz2 = (model: any) => {
  const {
    dispatch,
    context: {
      fsm
    }
  } = model;

  return (
    <div>
      <h1>Quiz 2</h1>
      <button onClick={() => dispatch(actions.fsm.cekJawaban(fsm))} >
        Next
      </button>
    </div>
  )
};

export default Quiz2;
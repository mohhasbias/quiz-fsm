// @flow
// @jsx element
import { element } from 'deku';

import actions from '../../actions';

const Quiz1 = (model: any) => {
  const {
    dispatch,
    context: {
      data
    }
  } = model;

  return (
    <div>
      <h1>Quiz 1</h1>
      <button onClick={() => dispatch(actions.fsm.cekJawaban(data))} >
        Next
      </button>
    </div>
  );
};

export default Quiz1;
// @flow 
// @jsx element
import { element } from 'deku';

import actions from '../../actions';

const Result = (model) => {
  const {
    dispatch,
    context: {
      fsm,
    }
  } = model;

  return (
    <div>
      <h1>Result</h1>
      <button onClick={() => dispatch(actions.fsm.startOver(fsm))} >
        Start Over
      </button>
    </div>
  )
};

export default Result;
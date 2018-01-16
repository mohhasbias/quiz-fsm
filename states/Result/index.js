// @flow 
// @jsx element
import { element } from 'deku';

import actions from '../../actions';

const Result = (model: any) => {
  const {
    dispatch,
  } = model;

  return (
    <div>
      <h1>Result</h1>
      <button onClick={() => dispatch(actions.fsm.startOver())} >
        Start Over
      </button>
    </div>
  )
};

export default Result;
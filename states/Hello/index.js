import { element } from 'deku';

import actions from '../../actions';

const Hello = (model) => {
  const {
    dispatch,
  } = model;
  return (
    <div>
      <h1>Welcome to Quiz</h1>
      <button onClick={() => dispatch(actions.fsm.init())} >
        Start Quiz
      </button>
    </div>
  );
};

export default Hello;
import { element } from 'deku';

import actions from '../../actions';

const Hello = (model) => {
  const {
    dispatch,
    context: {
      fsm
    },
  } = model;
  return (
    <div>
      <h1>Welcome to Quiz</h1>
      <button onClick={() => dispatch(actions.fsm.init(fsm))} >
        Start Quiz
      </button>
    </div>
  );
};

export default Hello;
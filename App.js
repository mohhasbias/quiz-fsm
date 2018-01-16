import { element } from 'deku';

import mapStateToView from './mapStateToView';

const App = (model) => {
  const {
    dispatch,
    context: {
      data,
      fsm
    },
  } = model;

  const View = mapStateToView[data.fsmTransition.currentState];

  return (
    <View />
  );
};

export default App;
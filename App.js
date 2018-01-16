// @flow
// @jsx element
import { element } from 'deku';

import mapStateToView from './mapStateToView';
import 'normalize.css';

const App = (model: any) => {
  const {
    context: {
      data,
    },
  } = model;

  const View = mapStateToView[data.fsmTransition.currentState];

  return (
    <View />
  );
};

export default App;
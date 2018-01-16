// @flow
import Hello from './states/Hello';
import Quiz1 from './states/Quiz1';
import Quiz2 from './states/Quiz2';
import Result from './states/Result';

const mapStateToView = {
  'none': Hello,
  'quiz1': Quiz1,
  'quiz2': Quiz2,
  'result': Result,
};

export default mapStateToView;
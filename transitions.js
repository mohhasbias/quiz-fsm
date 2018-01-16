// @flow

const transitions = [
  { name: 'init', from: 'none', to: 'quiz1' },
  // { name: 'cekJawaban', from: 'quiz1', to: (data) => data.jawabanBenar ? 'quiz2' : 'quiz1' }
  { name: 'cekJawaban', from: 'quiz1', to: 'quiz2' },
  { name: 'cekJawaban', from: 'quiz2', to: 'result' },
  { name: 'startOver', from: 'result', to: 'none' }
];

export default transitions;
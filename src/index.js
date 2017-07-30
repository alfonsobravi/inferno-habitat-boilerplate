import habitat from './lib';

function init() {
  console.log('HABITAT', typeof habitat, habitat);
  let widget = require('./App').default;
  let w = habitat(widget);
  w.render();
}

init();
import habitat from './lib';

function init() {
  console.log('HABITAT', typeof habitat, habitat);
  let Widget = require('./App').default;
  let w = habitat(Widget);
  w.render();
}

init();
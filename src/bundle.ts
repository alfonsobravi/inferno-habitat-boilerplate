import habitat from './_inferno-habitat/index.js';

function init() {
    console.log('HABITAT', typeof habitat, habitat);
    const widget = require('./App').default;
    const w = habitat(widget);
    w.render();
}

init();

const os = require('os');
const formatDistance = require('./index');

const distance = formatDistance(os.distance());

console.log(`Score ${distance}`);
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// require all modules ending in "-test" from the src directory and
const requireSrcTest = require.context('../../src/', true, /(.*?)\/tests\/(.*?)-test/);
requireSrcTest.keys().forEach(requireSrcTest);

// require all modules ending in "-test" from the BigTest tests directory and
// all subdirectories
const requireTest = require.context('./tests/', true, /-test/);

console.log(requireTest.keys());

requireTest.keys().forEach(requireTest);

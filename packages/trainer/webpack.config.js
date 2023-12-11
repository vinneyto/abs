const path = require('path');
const createConfig = require('@abs/webpack-config');

module.exports = createConfig({
  title: 'Trainer',
  path: path.resolve(__dirname, 'dist'),
});

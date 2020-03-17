const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');

module.exports = withPlugins([
  withSass,
  withImages
]);

// to use an svg file in next.js:
// 1. npm install @svgr/webpack --save-dev
// 2. create an next.config.js file in root for advanced next.js customization
// 3. add the webpack config below

const withImages = require('next-images')
module.exports = withImages({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
});

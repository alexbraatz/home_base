// to use an svg file:
// 1. npm install @svgr/webpack --save-dev
// 2. create an next.config.js file for advanced next.js customization
// 3. add the below

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};
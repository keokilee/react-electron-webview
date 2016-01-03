module.exports = function(config) {
  config.set({
    frameworks: ['mocha'],
    reporters: ['spec'],
    browsers: ['Electron'],
    singleRun: true,
    files: [
      "test/**/*.js"
    ],
    preprocessors: {
      "test/**/*.js": ["webpack", 'sourcemap']
    },
    webpack: require('./webpack.config'),
    webpackMiddleware: {
      noInfo: true
    }
  });
};

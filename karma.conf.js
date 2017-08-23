module.exports = function(config) {
  config.set({
    frameworks: ["mocha", "karma-typescript"],
    files: [
      { pattern: "src/**/*.ts" }
    ],
    preprocessors: {
      "**/*.ts": ["karma-typescript"]
    },
    reporters: ["spec", "karma-typescript"],
    browsers: ["ChromeHeadless"],
    singleRun: true
  });
};

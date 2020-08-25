/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  mutator: "typescript",
  packageManager: "npm",
  reporters: ["html", "clear-text", "progress"],
  testRunner: "jest",
  transpilers: [],
  coverageAnalysis: "off",
  tsconfigFile: "tsconfig.json",
  files: ["src/**/*.ts"],
  mutate: ["src/**/*.ts"],
};

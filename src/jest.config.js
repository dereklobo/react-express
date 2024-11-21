// jest.config.js
module.exports = {
    // [...]
    // Replace `ts-jest` with the preset you want to use
    // from the above list
    preset: 'ts-jest/presets/js-with-babel',
    transformIgnorePatterns: ["/node_modules/(?!(@bundled-es-modules)/)"],
  }
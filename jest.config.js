module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transformIgnorePatterns: [],
  transform: { '\\.js': 'babel-jest' },
  moduleNameMapper: {
    '.md\\?raw': 'jest-raw-loader',
  },
}

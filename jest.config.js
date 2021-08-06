module.exports = {
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',
  },
  modulePathIgnorePatterns: ['node_modules'],
  testMatch: ['**/?(*.)+(spec|test).+(js|jsx)'],
  setupFilesAfterEnv: ['<rootDir>/src/setup-tests.js'],
};

# React Javascript Boilerplate

![Lint](https://github.com/playerony/react-javascript-boilerplate/workflows/lint/badge.svg)
![Test](https://github.com/playerony/react-javascript-boilerplate/workflows/test/badge.svg)
![Build](https://github.com/playerony/react-javascript-boilerplate/workflows/build/badge.svg)
![Prettier](https://github.com/playerony/react-javascript-boilerplate/workflows/prettier/badge.svg)
![Commitlint](https://github.com/playerony/react-javascript-boilerplate/workflows/commitlint/badge.svg)

Minimal javascript boilerplate for React apps

## 📖 Table of Contents

- [✨ Getting started](#user-content--getting-started)
  - [Prerequisites](#prerequisites)
  - [Bootstrap](#bootstrap)
- [📜 Scripts](#user-content--scripts)
  - [Development](#development)
  - [Build](#build)
  - [Test](#test)
  - [Analyze](#analyze)
- [📚 Documentation](#user-content--documentation)
  - [Commit Message Guideline](#commit-message-guideline)

## ✨ Getting started

### Prerequisites

You need to have installed the following software:

- [nodejs](https://nodejs.org/en/) (>=14.15.0)
- [yarn](https://npmjs.com/) (>= 1.22.10)

### Bootstrap

```bash
  git clone --depth 1 https://github.com/playerony/react-javascript-boilerplate my-lib
  cd my-lib
  yarn install
```

## 📜 Scripts:

### Development

- `dev` - Run application in development mode.

### Build

- `build` - Build for production a ready application.

### Test

- `test` - Run tests.
- `test:ci` - Run tests in CI mode.
- `test:watch` - Run tests in watch mode.
- `test:coverage` - Run tests in coverage mode.
- `test:update-snapshot`: Run tests and update all snapshots.

### Analyze

- `lint` - Run `eslint`. Output any errors 🚨.
- `lint:fix` - Run `eslint` with `--fix`flag . Fix any lint errors 🚨.
- `typecheck` - Run `tsc`. Output any errors 🚨.
- `prettier:format` - Run `prettier` with `--write` flag to format all the files.
- `prettier:check` - Run `prettier` with `--check` flag. Output any format errors 🚨.
- `commitlint` - Run `commitlint`. Output any errors 🚨.
- `check` - Run `lint`, `commitlint`, `build`, `prettier:check` and `test`. Output any errors 🚨.

## 📚 Documentation

### Commit Message Guideline

- For easier commit type recognition commit messages are prefixed with a proper type
- See available commit types: [https://www.npmjs.com/package/@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional)

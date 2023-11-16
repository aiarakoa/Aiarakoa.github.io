In order to make tests work:

- install jest
- install test-js (and remove any babel-related dependencies): npm install -D ts-jest @types/jest
- install jest-environment-jsdom to mock DOM tree: npm install -D jest-environment-jsdom
- add to package.json, so jest is configured and admits ECMA-type JS files with modules

  "type": "module",
  "scripts": {
    "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js"
  },
  "jest": {
    "transform": {
      "^.+\\.(ts|tsx)$": "ts-jest"
    },
    "moduleNameMapper": {
      "/js/(.*)": "<rootDir>/js/$1"
    }
  },

- execute jest: npm test

In order to run the app locally:

- install live-server: npm install -g live-server

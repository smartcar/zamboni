'use strict';
// ESlinting for all files on pre-commit
// Be careful how many rules we specify as to not slow down commit times!

const config = require('@smartcar/eslint-config');

module.exports = {
  ...config,
  extends: [],
  rules: {
    'unicorn/expiring-todo-comments': [
      'error',
      { allowWarningComments: false },
    ],
  },
};

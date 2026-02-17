'use strict';
// ESlinting for all files on pre-commit
// Be careful how many rules we specify as to not slow down commit times!

module.exports = {
  extends: ['plugin:@smartcar/legacy', 'plugin:@smartcar/mocha'],
  rules: {
    'unicorn/expiring-todo-comments': [
      'error',
      { allowWarningComments: false },
    ],
  },
};

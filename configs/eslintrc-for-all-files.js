'use strict';
// ESlinting for all files on pre-commit
// Be careful how many rules we specify as to not slow down commit times!

const { legacy } = require('@smartcar/eslint-plugin').configs;

module.exports = {
  // Reuse legacy's env + parserOptions so modern syntax still parses...
  env: legacy.env,
  parserOptions: legacy.parserOptions,
  // ...but only register the plugin whose single rule we run below, and do NOT
  // extend the full legacy/mocha rulesets. This pre-commit pass runs on ALL
  // files with --no-inline-config, so keeping it to one rule avoids flagging
  // pre-existing code the repo's own .eslintrc intentionally allows. Restores
  // the pre-v3 behavior, which spread @smartcar/eslint-config with `extends: []`.
  plugins: ['unicorn'],
  rules: {
    'unicorn/expiring-todo-comments': [
      'error',
      { allowWarningComments: false },
    ],
  },
};

'use strict';

module.exports = {
  hooks: {
    'pre-commit':
      'lint-staged && eslint --no-eslintrc --config node_modules/@smartcar/zamboni/configs/eslintrc-for-all-files.js --no-inline-config .',
  },
};

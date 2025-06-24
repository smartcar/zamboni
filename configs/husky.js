'use strict';

module.exports = {
  hooks: {
    'pre-commit':
      'lint-staged && eslint --cache --no-eslintrc --config node_modules/@smartcar/zamboni/configs/eslintrc-for-all-files.js --no-inline-config .',
  },
};

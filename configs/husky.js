'use strict';

module.exports = {
  hooks: {
    'pre-commit':
      'lint-staged && eslint --no-eslintrc --config configs/eslintrc-for-all-files.js --no-inline-config .',
  },
};

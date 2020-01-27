'use strict';

module.exports = {
  // prettier
  '*.md': 'prettier --write',
  '*.{yaml,yml}': 'prettier --write',
  '!(package).json': 'prettier --write',

  'package.json': 'sort-package-json',

  // eslint
  '*.{js,jsx}': 'eslint --fix',
};

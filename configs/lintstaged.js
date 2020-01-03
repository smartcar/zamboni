'use strict';

const task = function(command) {
  if (Array.isArray(command)) {
    return command.push('git add');
  }

  return [command, 'git add'];
};

module.exports = {
  // prettier
  '*.md': task('prettier --write'),
  '*.{yaml,yml}': task('prettier --write'),
  '!(package).json': task('prettier --write'),

  'package.json': task('sort-package-json'),

  // eslint
  '*.{js,jsx}': task('eslint --fix'),
};

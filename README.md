# @smartcar/zamboni

> Combines Configuration files for ESlint, Prettier, and Husky into one convenient package.

Makes it easier to enable linting on projects by providing configuration files with sane defaults as well as centrally tracking versions of the various dependencies.

_This package is intended for internal use and may not strictly follow Semver guidelines_

## Installation

1. Authenticate with GitHub package registry by following [these](https://help.github.com/en/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages) steps.

2. `npm install --save-dev @smartcar/zamboni`

3. Create the following configuration files in root of your project:

   - `.eslintrc.js` - follow instructions [here](https://github.com/smartcar/eslint-config-smartcar#configuration)<br>
     _note: no need to install `@smartcar/eslint-config`, this package includes it as a dependency_

   - `.huskyrc.js`

     ```js
     'use strict';

     module.exports = require('@smartcar/zamboni').config.husky;
     ```

   - `.lintstagedrc.js`

     ```js
     'use strict';

     module.exports = require('@smartcar/zamboni').config.lintstaged;
     ```

   - `.prettierrc.js`<br>
     _note: no need to install `@smartcar/prettier-config`, this package includes it as a dependency_

     ```js
     'use strict';

     module.exports = require('@smartcar/prettier-config');
     ```

4. Go about your business and let the zamboni do it's thing.
   <p align="center">
     <img src="https://media.giphy.com/media/cArmLFTDx7Lt1UA2W9/giphy.gif" alt="Get HYPED">
   </p>

## Related

- [@smartcar/eslint-config](https://github.com/smartcar/eslint-config-smartcar) - ESLint shareable config for Smartcar
- [@smartcar/prettier-config](https://github.com/smartcar/prettier-config) - Prettier shareable config for Smartcar

## License

MIT © [Smartcar, Inc.](https://smartcar.com)

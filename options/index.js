import inquirer from 'inquirer';

import { packageName } from './options.js';

export default () => {
  return inquirer.prompt([
    //1
    packageName(),
  ]);
};

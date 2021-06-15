import inquirer from 'inquirer';

import { packageName, language } from './options.js';

export default () => {
  return inquirer.prompt([
    // * 输入项目名
    packageName(),
    // * 选择语言（JavaScript/TypeScript）
    language(),
  ]);
};

import fs from 'fs';
import createFileByTemplate from './utils/createFileByTemplate.js';
// var inquirer = require('inquirer');

// TODO 1.创建项目文件、目录
fs.mkdirSync(`${getPackageName()}`);

fs.writeFileSync(`${getPackageName()}/index.js`, 'index.js');

fs.writeFileSync(
  `${getPackageName()}/package.json`,
  createFileByTemplate('./template/package.json'),
);

fs.writeFileSync(`${getPackageName()}/webpack.config.js`, 'index.js');

fs.writeFileSync(`${getPackageName()}/.gitignore`, 'index.js');

// TODO 1.创建项目文件
// TODO 1.创建项目文件

function getPackageName() {
  return './hei';
}

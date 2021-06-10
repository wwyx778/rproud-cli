import fs from 'fs';
import inputOptions from './options/index.js';
import createFileByTemplate from './utils/createFileByTemplate.js';
// var inquirer = require('inquirer');
// TODO 用户输入
const options = await inputOptions();

// TODO 创建项目文件、目录
fs.mkdirSync(`${options.packageName}`);

fs.writeFileSync(`${options.packageName}/index.js`, 'index.js');

fs.writeFileSync(
  `${options.packageName}/package.json`,
  createFileByTemplate('./template/package.json'),
);

fs.writeFileSync(`${options.packageName}/webpack.config.js`, 'index.js');

fs.writeFileSync(`${options.packageName}/.gitignore`, 'index.js');

// TODO 1.创建项目文件
// TODO 1.创建项目文件

function getPackageName() {
  return './hei';
}

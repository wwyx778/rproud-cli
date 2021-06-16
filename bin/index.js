#!/usr/bin/env node

import fs from 'fs';
import execa from 'execa';
import inputOptions from './options/index.js';
import createFile from './createFileByTemplate.js';

// * 用户输入
const options = await inputOptions();
const { packageName, language } = options;
const lang = {
  JAVASCRIPT: 'js',
  TYPESCRIPT: 'tsx',
}[language];

const ts = language === 'TYPESCRIPT';

// * 创建项目文件、目录
fs.mkdirSync(`${packageName}`);
fs.mkdirSync(`${packageName}/public`);
fs.mkdirSync(`${packageName}/src`);

fs.writeFileSync(`${packageName}/public/index.html`, createFile('index.html'));
fs.writeFileSync(`${packageName}/src/index.${lang}`, createFile(`${lang}/index`));
fs.writeFileSync(`${packageName}/src/component.${lang}`, createFile(`${lang}/component`));
fs.writeFileSync(`${packageName}/src/styles.css`, createFile(`styles`));
fs.writeFileSync(`${packageName}/package.json`, createFile('package', { ts: ts }));

fs.writeFileSync(`${packageName}/webpack.config.js`, createFile('webpack.config', { ts: ts }));

// fs.writeFileSync(`${packageName}/postcss.config.js`, createFile('postcss.config'));

fs.writeFileSync(`${packageName}/.gitignore`, 'node_modules/');

execa('npm', ['install'], { cwd: packageName, stdio: [2, 2, 2] });
// console.log(stdout);

import fs from 'fs';
import inputOptions from './options/index.js';
import createFile from './utils/createFileByTemplate.js';

// * 用户输入
const options = await inputOptions();
const { packageName, language } = options;
const lang = {
  JAVASCRIPT: 'js',
  TYPESCRIPT: 'ts',
}[language];
// * 创建项目文件、目录
fs.mkdirSync(`${packageName}`);

fs.writeFileSync(`${packageName}/index.html`, createFile('index.html'));
fs.writeFileSync(`${packageName}/index.${lang}`, createFile(`${lang}/index`));
fs.writeFileSync(`${packageName}/component.${lang}`, createFile(`${lang}/component`));
fs.writeFileSync(
  `${packageName}/package.json`,
  createFile('package', { ts: language === 'TYPESCRIPT' }),
);

// fs.writeFileSync(`${packageName}/webpack.config`, createFile('webpack.config.js'));

// fs.writeFileSync(`${packageName}/postcss.config`, '');

fs.writeFileSync(`${packageName}/.gitignore`, 'node_modules/');

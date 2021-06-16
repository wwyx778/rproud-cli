import fs from 'fs';
import ejs from 'ejs';
import path from 'path';
import { fileURLToPath } from 'url';

function getTpltPath(fileName) {
  const __dirname = fileURLToPath(import.meta.url);
  return path.resolve(__dirname, `../template/${fileName}.ejs`);
}

/**
 * 根据模版创建文件
 * @param {*} filePath
 * @param {*} param
 */
export default function createFileByTemplate(fileName, param) {
  const path = getTpltPath(fileName);
  const template = fs.readFileSync(path);
  return ejs.render(template.toString(), param);
}

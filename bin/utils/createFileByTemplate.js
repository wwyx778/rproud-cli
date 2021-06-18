const fs = require('fs');
const ejs = require('ejs');
const path = require('path');

const getTpltPath = (fileName) => {
  // console.log(`${import.meta.url}../template/${fileName}.ejs`);
  // const __dirname = fileURLToPath(`${import.meta.url}../template/${fileName}.ejs`);
  // console.log(__dirname);
  return path.resolve(__dirname, `../template/${fileName}.ejs`);
};

/**
 * 根据模版创建文件
 * @param {*} filePath
 * @param {*} param
 */
module.exports = createFileByTemplate = (fileName, param) => {
  const path = getTpltPath(fileName);
  const template = fs.readFileSync(path);
  return ejs.render(template.toString(), param);
};

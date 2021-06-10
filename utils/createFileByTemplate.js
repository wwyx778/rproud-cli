import fs from 'fs';

/**
 * 根据模版创建文件
 * @param {*} filePath 
 * @param {*} param 
 */
export default function createFileByTemplate(filePath, param) {
  const file = fs.readFileSync(filePath);
  return file.toString();
}

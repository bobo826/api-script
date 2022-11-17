// 第一步扫描文件，将接口名称及接口地址写入文件./src/erp/temp/route-apiPath.json，去重得到./src/erp/temp/route-apiPath-newSet.json
const fs = require('fs');
const path = require('path');
const buf = new Buffer.alloc(10240000);
const outDir = "./src/erp/temp/route-apiPath.json";
const dealOutDir = "./src/erp/temp/route-apiPath-newSet.json";
const apiMap = {};
const values = [];
const openFile = async (location, key) => {
  const fd = fs.openSync(location, 'rs+');
  if (fd) {
    const bytes = fs.readSync(fd, buf, 0, buf.length, 0);
    // 仅输出读取的字节
    if (bytes > 0) {
      const fileContentStr = buf.slice(0, bytes).toString();
      const fileContentArr = fileContentStr.split(`export async fu`);
      fileContentArr.forEach(item => {
        if (item) {
          const tempFunctionName = item.substring(item.indexOf("nction ") + 7, item.length);
          const tempValue = item.substring(0, item.indexOf(", {")) || item.substring(0, item.indexOf(")."));
          if ((item.indexOf(", {") > -1 || item.indexOf(").") > -1) && tempValue && item.indexOf("nction ") > -1 && tempFunctionName) {
            const functionName = tempFunctionName.substring(0, tempFunctionName.indexOf("(") + 0);
            const value = tempValue.substring(tempValue.indexOf("return request(") + 16, tempValue.length - 1);
            if (tempValue.indexOf("return request(") > -1 && value && tempFunctionName.indexOf("(") > -1 && functionName) {
              const tempObj = {}
              tempObj[functionName] = value
              values.push(tempObj)
            }
          }
        }
      })
      fs.writeFileSync(outDir, JSON.stringify(values, null, "\t"), {
        encoding: "utf8",
      });
      const tempValues = values.map(cell => {
        return JSON.stringify(cell)
      })
      const newValues = Array.from(new Set([...tempValues]));
      const lastValues = newValues.map(cell => {
        return JSON.parse(cell)
      })
      fs.writeFileSync(dealOutDir, JSON.stringify(lastValues, null, "\t"), {
        encoding: "utf8",
      });
    }
  }
  return apiMap;
}

const readDir = async (url, filePath_key) => {
  const dirInfo = fs.readdirSync(url);
  if (dirInfo) {
    dirInfo.forEach((item) => {
      const location = path.join(url, item);
      fs.stat(location, async (err, info) => {
        if (err) {
          return console.error(err);
        }
        if (info.isDirectory()) {
          readDir(location, filePath_key);
        } else {
          const fileSuffix = item.substring(item.indexOf('.'));
          if (!['.ts'].includes(fileSuffix)) {
            return;
          } else {
            const tempLocation = location.replace(/\\/g, '/');
            const key = tempLocation.substring(51, tempLocation.lastIndexOf("\/"));
            openFile(location, key);
          }
        }
      });
    });
  }
}

// readDir('./src');
readDir('C://JojoWorkSpace/company-projects/erp-ae/src/pages');
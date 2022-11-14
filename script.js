const fs = require('fs');
const path = require('path');
const buf = new Buffer.alloc(1024);
const outDir = "./dist/codes.json";
const apiMap = {};
const openFile = (location, key) => {
  fs.open(location, 'rs+', function (err, fd) {
    if (err) {
      return console.error(err);
    }
    console.log("文件打开成功,准备读取文件...");
    fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
      if (err) {
        return console.error(err);
      }
      // 仅输出读取的字节
      if (bytes > 0) {
        const fileContentStr = buf.slice(0, bytes).toString();
        const fileContentArr = fileContentStr.split(`\n`);
        const values = []
        fileContentArr.forEach(item => {
          const tempValue = item.substring(0, item.indexOf(","));
          if (tempValue) {
            const value = tempValue.substring(tempValue.indexOf("return request(") + 16, tempValue.length - 1);
            if (value) {
              values.push(value)
            }
          }
        })
        if (!apiMap.hasOwnProperty(key)) {
          apiMap[key] = values;
        } else {
          apiMap[key] = Array.from(new Set([...apiMap[key], ...values]));
        };
        fs.writeFileSync(outDir, JSON.stringify(apiMap, null, "\t"), {
          encoding: "utf8",
        });
      }
    });
  });
}

const readDir = (url) => {
  fs.readdir(url, function (err, dirInfo) {
    if (err) {
      return console.error(err);
    }
    dirInfo.forEach((item) => {
      const location = path.join(url, item);
      fs.stat(location, function (err, info) {
        if (err) {
          return console.error(err);
        }
        if (info.isDirectory()) {
          readDir(location);
        } else {
          if (!['service.js', 'services.js'].includes(item)) {
            return;
          } else {
            const tempLocation = location.replace(/\\/g, '/');
            const key = tempLocation.substring(0, tempLocation.lastIndexOf("\/"));
            openFile(location, key);
          }
        }
      });
    });
  });
}

readDir('./src');
// readDir('C://JojoWorkSpace/company-projects/erp-ae/src/pages/settlement/transferDetailsConsignment');
const fs = require('fs');
const path = require('path');
const buf = new Buffer.alloc(10240000);
const outDir = "./src/erp/temp/api-codes.json";
const dealOutDir = "./src/erp/temp/deal-api-codes.json";
const inJson = require("./src/erp/temp/route-apiPath-newSet.json");
const apiMap = {};
const dealValues = [];
const openFile = async (location, newKey) => {
  const fd = fs.openSync(location, 'rs+');
  if (fd) {
    const bytes = fs.readSync(fd, buf, 0, buf.length, 0);
    // 仅输出读取的字节
    if (bytes > 0) {
      const fileContentStr = buf.slice(0, bytes).toString();
      const seviceStrIndex = fileContentStr.lastIndexOf("service");
      const sevicesStrIndex = fileContentStr.lastIndexOf("services");
      let newStr = ''
      if (seviceStrIndex > -1 || sevicesStrIndex > -1) {
        if (seviceStrIndex >= sevicesStrIndex) {
          newStr = fileContentStr.substring(0, seviceStrIndex)
        } else {
          newStr = fileContentStr.substring(0, sevicesStrIndex)
        }
      }
      const fileContentArr = newStr.split(`,`);
      const values = [];
      fileContentArr.forEach(item => {
        inJson.forEach(apiObj => {
          Object.keys(apiObj).forEach(n => {
            if (item && item.indexOf(n) > -1) {
              values.push(apiObj[n])
              dealValues.push(apiObj[n])
            }
          })
        })
      })
      let key = newKey
      if (newKey.indexOf('/component') > -1) {
        newKey = newKey.substring(0, newKey.indexOf('/component'))
      } else if (newKey.indexOf('/components') > -1) {
        newKey = newKey.substring(0, newKey.indexOf('/components'))
      }
      key = newKey
      if (!apiMap.hasOwnProperty(key)) {
        apiMap[key] = {
          apiPath: values
        };
      } else {
        const newValues = Array.from(new Set([...apiMap[key].apiPath, ...values]));
        apiMap[key] = {
          apiPath: newValues
        }
      };
      if (!apiMap[key].apiPath.length) {
        delete apiMap[key]
      }
      fs.writeFileSync(outDir, JSON.stringify(apiMap, null, "\t"), {
        encoding: "utf8",
      });
      const tempValues = dealValues.map(cell => {
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
          if (!['.tsx'].includes(fileSuffix)) {
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
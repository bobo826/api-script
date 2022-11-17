const fs = require('fs');
const outDir = "./src/erp/out/new-router.js";
const erpRoutes = require("./src/erp/in/router");
const erpApis = require("./src/erp/temp/api-codes.json");
const authKeysObj = require("./src/erp/temp/authkeys-obj.json");

const parseRoute = (erpRoutes = []) => {
  erpRoutes.forEach(item => {
    // item.authKey = authKeysObj[item.title];
    if (item.routes && item.routes.length) {
      item.authKey = authKeysObj[item.title];
      parseRoute(item.routes)
    } else {
      Object.keys(item).forEach(key => {
        if (key === 'component') {
          let newKey = item[key]
          if (newKey.lastIndexOf('/') > -1) {
            newKey = newKey.substring(0, newKey.lastIndexOf('/'))
          }
          const apiPath = erpApis[newKey].apiPath.join(',');
          item.apiPath = apiPath;
        }
        if (key === 'title') {
          item.authKey = authKeysObj[item[key]];
        }
      })
    }
  })
  fs.writeFileSync(outDir, JSON.stringify(erpRoutes, null, "\t"), {
    encoding: "utf8",
  });
}

parseRoute(erpRoutes)

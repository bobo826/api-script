const fs = require('fs');
const outDir = "./src/erp/out/new-router.js";
const erpRoutes = require("./src/erp/in/router");
const erpApis = require("./src/erp/temp/api-codes.json");
const parseRoute = (erpRoutes = []) => {
  erpRoutes.forEach(item => {
    if (item.routes && item.routes.length) {
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
      })
    }
  })
  fs.writeFileSync(outDir, JSON.stringify(erpRoutes, null, "\t"), {
    encoding: "utf8",
  });
}

parseRoute(erpRoutes)

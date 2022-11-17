const fs = require('fs');
const erpAuthKeys = require("./src/erp/in/authorization");
const erpOutAuthkeysObj = './src/erp/temp/authkeys-obj.json';
const authKeysObj = {};
const parseAuthKeys = (erpAuthKeys = []) => {
  erpAuthKeys.forEach(item => {
    if (item.children && item.children.length && item.type === 'route') {
      authKeysObj[item.name] = item.key
      parseAuthKeys(item.children)
    } else {
      authKeysObj[item.name] = item.key
    }
  })
  fs.writeFileSync(erpOutAuthkeysObj, JSON.stringify(authKeysObj, null, "\t"), {
    encoding: "utf8",
  });
}

parseAuthKeys(erpAuthKeys)

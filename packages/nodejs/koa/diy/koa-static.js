const fs = require('fs');
const path = require('path');

module.exports = (dirPath = 'public') => {
  return async (ctx, next) => {
    if (ctx.req.url.includes(dirPath)) {
      const url = path.resolve(__dirname, dirPath);
      const fileBaseName = path.basename(url);

      const filePath = url + ctx.req.url.replace(dirPath, '');
    }
  };
};

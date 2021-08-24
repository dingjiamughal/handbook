const loaderUtils = require('loader-utils');

module.exports = function (source) {
  const options = loaderUtils.getOptions(this);
  console.log(this.sourceQuery);

  const asyncfunc = this.async();

  setTimeout(() => {
    source += options.message;
    asyncfunc(null, source);
  }, 1000);

  // 可以传递更详细的信息
  //   this.callback(null, source);
};

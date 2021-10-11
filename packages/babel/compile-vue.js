const compiler = require('@vue/compiler-sfc');

const content = compiler.compileTemplate({
  source: '<div>hello world</div>'
});

console.log(content);

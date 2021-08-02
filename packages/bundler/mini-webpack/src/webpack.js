const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const { default: traverse } = require('@babel/traverse');

class Webpack {
  constructor(options) {
    console.log(options);
    const { entry, output } = options;
    this.entry = entry;
    this.output = output;
  }

  // 模拟 webpack.run
  run() {
    this.parse(this.entry);
  }

  parse(entry) {
    console.log(entry);
    const content = fs.readFileSync(entry, 'utf8');
    console.log(content);

    const ast = parser.parse(content, {
      sourceType: 'module'
    });

    // console.log(ast.program.body);

    // const
    traverse(ast, {
      // 要处理什么节点，就声明节点类型
      // ast.program.body 下的 type
      // 处理 import xxx
      ImportDeclaration: ({ node }) => {
        console.log(node);
        const importPathname = path.join(path.dirname(entry), node.source.value);
        console.log(importPathname);

        const importContent = fs.readFileSync(importPathname + '.js', 'utf-8');
        console.log(importContent);

        this.parse(importPathname + '.js');
      }
    });
  }
}

module.exports = Webpack;

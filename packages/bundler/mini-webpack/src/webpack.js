const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const babel = require('@babel/core');
const { default: traverse } = require('@babel/traverse');

class Webpack {
  constructor(options) {
    const { entry, output } = options;
    this.entry = entry;
    this.output = output;
    this.modules = []; // 存放依赖模块的信息
  }

  // 模拟 webpack.run
  run() {
    const info = this.parse(this.entry);

    this.modules.push(info);

    // 奇淫技巧 - dfs
    for (let i = 0; i < this.modules.length; i++) {
      const module = this.modules[i];
      if (module.deps) {
        // console.log(module.deps);
        // 看下模块中是否有依赖，对依赖遍历处理
        Object.entries(module.deps).forEach(([key, value]) => {
          this.modules.push(this.parse(value));
        });
      }
    }
    console.log(this.modules);

    // 可以直接变成 map,分两步清晰
    const modulesMap = this.modules.reduce((memo, next) => {
      memo[next.entry] = next;
      return memo;
    }, {});

    // console.log(this.modules);

    this.fileWrite(modulesMap);
  }

  parse(entry) {
    const content = fs.readFileSync(entry, 'utf8');
    const ast = parser.parse(content, { sourceType: 'module' });

    // console.log(ast.program.body);

    const deps = {};
    traverse(ast, {
      // 要处理什么节点，就声明节点类型
      // ast.program.body 下的 type
      // 下面是处理 import xxx from 'xxx'
      ImportDeclaration: ({ node }) => {
        // node.source.value => ./b.js
        const importPathname = path.join(path.dirname(entry), node.source.value);
        deps[node.source.value] = importPathname;
      }
    });

    const { code } = babel.transformFromAst(ast, null, {
      presets: ['@babel/preset-env']
    });

    return {
      entry,
      deps,
      code
    };
  }
  // 生成文件内容 webpackBootstrap
  fileWrite(modules) {
    // console.log(code);
    modules = JSON.stringify(modules);
    const bundle = `
      (function (modules) {
        function require(module) {
          // 把相对路径替换成真实路径 ./b.js => a/b/c/src/b.js
          function pathRequire(relativePath) {
            return require(modules[module].deps[relativePath]);
          }
          // 定义 exports
          const exports = {};
          // 多一层作用域
          (function (require, exports, code) {
            eval(code);
          })(pathRequire, exports, modules[module].code);

          return exports;
        }

        require('${this.entry}') // entry 文件先进去处理一下
      })(${modules})
    `;

    const outputFilePath = path.join(this.output.path, this.output.filename);
    fs.writeFileSync(outputFilePath, bundle, 'utf-8');

    // console.log(outputFilePath);
  }
}

module.exports = Webpack;

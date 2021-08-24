### webpack

- ast 解析入口，拿到依赖图谱
- 递归
- 生成 bundle

> 解析入口

```js
const deps = {};
traverse(ast, {
  ImportDeclaration: ({ node }) => {
    // node.source.value => ./b.js
    const importPathname = path.join(path.dirname(entry), node.source.value);
    deps[node.source.value] = importPathname;
  }
});

const { code } = babel.transformFromAst(ast, null, { presets: ['@babel/preset-env'] });

return { entry, deps, code };
```

> 递归解析 依赖图谱

```js
for (let i = 0; i < this.modules.length; i++) {
  const module = this.modules[i];
  if (module.deps) {
    Object.entries(module.deps).forEach(([key, value]) => this.modules.push(this.parse(value)));
  }
}
```

> 生成 bundle

需要完成 require 和 exports 的定义，然后 eval(code)，eval 会解析参数

```js
(function (modules) {
    function require(module) {
        function pathRequire(relativePath) {
            return require(modules[module].deps[relativePath]);
        }
        const exports = {};
        (function (require, exports, code) {
            eval(code);
        })(pathRequire, exports, modules[module].code);

        return exports;
    }

    require('${this.entry}')
})(${modules})
```

### loader

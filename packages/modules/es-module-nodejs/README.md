# 模块化

### cjs & esm

`package.json` 中添加，esmodule 后缀可由 `.mjs` 改成 `.js` <br>
启动 esm 命令从 `node index.mjs --experimental-modules` --> `node index.js` <br>
commonjs 相关文件需要改成 `.cjs`

```json
"type": "module"
```

- esmodule 可以 import commonjs
- commonjs 不可 import esmodule
- commonjs 始终只会导出一个默认成员 module.export = 'xxx' / exports.xxx
- import 不是解构导出对象

### 低版本下的兼容 node <= 8

```
yarn add @babel/node @babel/core @babel/preset-env --dev

yarn babel-node index.js

// .babelrc
{
    "presets" : ["@babel/preset-env"]
}

// 也可以用一个个 plugins 来做 polyfill
{
    "plugins": [
        "@babel/plugin-transform-modules-commonjs"
    ]
}
```

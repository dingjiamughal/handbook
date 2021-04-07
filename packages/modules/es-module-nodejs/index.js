// node --experimental-modules index.mjs
import { foo, bar } from './esm.js';
import fs from 'fs';
import _ from 'lodash'; // 支持

// import { writeFileSync } from 'fs'; // 支持！ 默认模块内部做了 export 处理
// import { upperFirst } from 'lodash'; // 不支持！
fs.writeFileSync('a.txt', 'hello world', 'utf8');
console.log(foo, bar);
console.log(_.upperFirst('dingjia'));

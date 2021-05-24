### 父子进程通信

```js
// 主进程
const cp = require('child_process');

const child = cp.fork(path.resolve(__dirname, './child.js'));
child.send('main process', () => child.disconnect());
child.on('message', msg => console.log(msg));
console.log(process.pid);

// 子进程
process.on('message', msg => console.log(msg));
process.send('child process');
console.log(process.pid);
```

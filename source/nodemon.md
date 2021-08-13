### nodemon

- 监听文件变化

```js
chokidar.watch(['a.js']).on('all', (event, path) => {
  debounce(restart, 300);
});
```

- 重启进程（命令）

```js
// 1. kill 进程
// 2. 启动进程
function restart() {
  childProcess && childProcess.kill();
  childProcess = cp.spawn('npm', ['run', 'dev'], {
    stdio: [process.stdin, process.stdout, process.stderr]
  });
}
```

- debounce

```js
function debounce(fn, delay = 300) {
  let timeout;

  return function (...args) {
    timeout && clearTimeout(timer);

    timeout = setTimeout(fn.apply(this, args), delay);
  };
}
```

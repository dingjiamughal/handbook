### 为什么 windows 下 全局 link 的命令提示 permission denied

运行 ls -al
-rw-r--r--
第 1 个字符，文件种类： - 代表一个文件 d 代表文件夹
第 234，代表`当前用户`权限 rwx r:`可读` w:`可写` x:`可执行`
第 567，代表`工作组`权限
第 8910，代表电脑`其他用户`权限

修改权限变为可执行: chmod 755 cli.js
-rwxr-xr-x

### 脚手架 可执行文件 = 应用

在文件顶部输入 `#! /usr/bin/env node` 当直接输入 `./a.js` 相当于调用系统中的环境变量 `node`

### 如何添加多个软链接

```
ln -s command1 command2

which command2
```

输入 `command2` 系统会去 `which command2` -> `command1 path`

### 参数解析

process.argv

```js
const process = require('process');

const argv = process.argv;

/**
 * /usr/local/bin/node
 * 脚手架node路劲
 * init - argv[2]
 */
console.log(argv);
```

使用库

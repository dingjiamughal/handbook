### 为什么 windows 下 全局 link 的命令提示 permission denied

运行 ls -al
-rw-r--r--
第 1 个字符，文件种类： - 代表一个文件 d 代表文件夹
第 234，代表`当前用户`权限 rwx r:`可读` w:`可写` x:`可执行`
第 567，代表`工作组`权限
第 8910，代表电脑`其他用户`权限

修改权限变为可执行: chmod 755 cli.js
-rwxr-xr-x

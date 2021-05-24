lerna 只能作用于 git + js 应用

### lerna 香在哪

- npm link
- 多 pkg install
- unit test
- publish
- code commit
- 发布不用手动更新版本
- 一个库版本变动，其所依赖的库也要更新版本号

项目架构优化的产物

### usage

#### 前期准备

- init project
- install lerna
- lerna init

#### 创建 package

- lerna package
- lerna add
- lerna link

#### 业务开发

- lerna exec shell 脚本
- lerna run 执行 npm scripts
- lerna clean 清空依赖
- lerna bootstrap 安装依赖

#### 发布

- lerna version / bump version
- lerna changed
- lerna diff
- lerna publish

### direction

```
lerna create pkgName
lerna add depName

lerna link -  M1 是 M2 依赖，可以直接软链接

lerna exec -- rm -rf node_modules
lerna exec --scope @cx/utils -- rm -rf node_modules

lerna changed 看看和上个版本哪些包有变更
```

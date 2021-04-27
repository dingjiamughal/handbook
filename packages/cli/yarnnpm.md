# yarn 和 npm

### yarn npm 差异

yarn 可直接运行本地模块
`yarn standard --version` 等同于 `./node_modules/.bin/standard --version`

npx 可直接运行远程/本地模块
`npx standard --version` 等同于 `./node_modules/.bin/standard --version` <br>
`npx serve .`

获取 npm 全局目录的
`npm config get prefix`

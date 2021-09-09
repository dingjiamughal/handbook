#### http 缓存整理

`Expires` 设定过期时间
假如设定时间是 2021.9.10，距离现在 4 天，如果 4 天内有修改
`If-Modified-Since` 服务端通知浏览器上一次更新时间，最小级别是秒，如果 1 秒内多次更新资源，就没法获取最新
`Cache-Contorl` Cache-Control：max-age=10 10 秒内用缓存，优先级 > expires
`If-None-Match` 服务器会返回这个字段，通过和浏览器`ETag`做对比，如果没有变则不管`If-Modified-Since`
`hash后缀` 浏览器可以主动控制是否缓存

#### xss

script 注入
`<script>alert('XSS');</script>` 这个不经过处理，渲染出来会变成 html 节点
用`escapeHTML()`进行转译

`<a href="javascript:alert(&#x27;XSS&#x27;)">跳转</a>` 这个虽然转译了，但还是会 href 执行
显然不能让他执行，href 匹配`http https`，不中就跳转到 404

解决方法：

```
html 转译复杂，可以用一些库 => xss

服务端 设置 httpOnly: true 禁止浏览器发送和更改 cookie
服务端 ctx.set('X-XSS-Protection', 0) 可以拦截 html 内容和属性
```

#### csrf

跨站请求伪造，A 网站发一个请求，B 网站渲染了内容

```js
// 静默请求
document.write(`
<form action="xxx.com" method="post" target="csrf">
    <input value="起飞" />
</form>
`);

var iframe = document.createElement('iframe');
iframe.name = 'csrf';
iframe.style.display = 'none';
document.body.appendChild(iframe);

setTimeout(function () {
  document.querySelector('form').submit();
}, 1000);
```

解决方法：

```
1. ctx.request.header.referer 这个输入 url，只允许本站的请求进来
2. 人机验证
3. cookie进行hash
```

#### 点击劫持 clickjacking

B 网站搞一个 opacity: 0 的 A 网站的 iframe，诱导点击
解决方法：

```js
// server
ctx.set('X-FRAME-OPTIONS', 'DENY');
// js的方式
```

#### sql 注入

```
1' or '1' = '1
```

解决方法：

```
WHERE username = ?
AND password = ?
```

#### os 注入

```js
exec(`git clone ${repo} /a/b`);
repo = https://github.com/x.git && rm -rf /* &&
```

#### 请求劫持

#### 输入 url 发生了什么

1. 浏览器抽取域名，如：baidu.com
2. DNS 解析，解析域名，由专门域名解析服务器完成，解析成 ip

```
dns缓存 --- 递归查询
1. 浏览器缓存
2. 系统缓存，host 文件
3. 路由缓存
4. 递归查询

域名服务商，获取ip --- 迭代查询
```

3. 浏览器和服务器建立 TCP 连接

```
三次握手：
1. 客户端向服务器发请求，等待确认
2. 服务端收到请求，并确认返回
3. 客户端收到服务端指令，并返回确认

以上确定连接，可以交互了
```

4. 发送 http 请求
   浏览器渲染
   浏览器解析 html 源码，创建 dom 树，解析 css 模型，dom+cssom 渲染 dom 树，绘制页面

#### http 和 https

https 是 http 上加了安全协议
http 对称加密 -> 公用一把锁和密钥
https 非对称加密 -> 一个桶，用自己的锁和密钥

#### vue 响应式

此处省略 vm 方法的挂载

defineProperty
dfs data 中的 key
每一次拦截定义 dep 用来收集 Watcher(depend -> addSub) 和通知触发 Watcher 的 update(notify -> update)
getter 中 depend
setter 中 notify

由此，响应式主要是靠 Watcher 更新 vdom + 后续操作如更新 html

那么执行 dep 中的 Watcher 从哪来？再此之前，先要清楚 Watcher 如何可以添加到 dep

每一次 new Watcher 会执行 Watcher 中的 get 方法，往 Dep 中添加自己，很关键！！！ pushTarget(Dep.target = target) + popTarget

知道了如何把 Watcher 添加到 dep，都是在 new Watcher 的 get 中
有三个地方会调用 this.get

1. constructor
   初始化时除了 computed，watch 和 mountComponent 都会调用
2. this.run 方法中
3. evaluate

有三个方式中触发 new Watcher

1. computed
   初始化调用 initComputed
   new Watcher(computed 回调函数) Watcher 中并不会触发 this.get
   defineComputed 中 定义 Dep，这样实现用的时候给 computed 回调里的 state 添加 Dep，然后触发 watcher.run，实现 state 更改触发 computedWatcher
   defineComputed => 把 computed 挂在 vm 上 + defineProperty，vm.计算属性.get 执行回调 / vm.计算属性.set 执行一个空函数 noop
   这样的目的是用到的时候再去 defineProperty

2. watch
   判断数组 or 对象，最终调用 createWatcher -> vm.$watch
   vm.$watch => new Watcher
   如果 immediate，立刻向 dep 添加 this

3. mountComponent
   mountComponent 中做的事情按照顺序大致：执行 beforeMount、new Watch(updateComponent)、定义了 beforeUpdate 在 sub.update 之前会调用他、执行 mounted
   new Watcher(vm, updateComponent) updateComponent 就是 vm_update(vm.render) diff + vnode 的过程
   Watcher 内部会把 mountComponent 的情况。设置 vm.\_watcher = this 方便自己用

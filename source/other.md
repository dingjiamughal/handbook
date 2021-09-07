#### http 缓存整理

`Expires` 设定过期时间
假如设定时间是 2021.9.10，距离现在 4 天，如果 4 天内有修改
`If-Modified-Since` 服务端通知浏览器上一次更新时间，最小级别是秒，如果 1 秒内多次更新资源，就没法获取最新
`Cache-Contorl` Cache-Control：max-age=10 10 秒内用缓存，优先级 > expires
`If-None-Match` 服务器会返回这个字段，通过和浏览器`ETag`做对比，如果没有变则不管`If-Modified-Since`
`hash后缀` 浏览器可以主动控制是否缓存

#### xss

`<script>alert('XSS');</script>` 这个不经过处理，渲染出来会变成 html 节点
用`escapeHTML()`进行转译

`<a href="javascript:alert(&#x27;XSS&#x27;)">跳转</a>` 这个虽然转译了，但还是会 href 执行
显然不能让他执行，href 匹配`http https`，不中就跳转到 404

html 转译复杂，可以用一些库

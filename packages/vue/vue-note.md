# Vue 笔记

> v-if 不能在 v-for 中使用

> 事件中 event 对象

```html
<!-- event 对象为第一个参数 -->
<div @click="handleClick"></div>
<!-- $event 可以指定 event 对象 -->
<div @click="handleClick2(2, $event)"></div>
```

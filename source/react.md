### toy-react 一些理解

实现的演变过程

- 通过 transfor-plugin-react-jsx 编译 jsx => createElement
- 实现 createElement 方法，转化为真实 dom
- 引入 setState 方法，配合 rangeApi 实现全亮 re-render
- 引入虚拟 dom 和 update 方法，实现局部的 re-render

关于 range api：https://juejin.cn/post/6945000129472659487

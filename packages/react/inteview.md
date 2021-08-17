> 合成事件

`vue` 的 event 是原生 event 对象，`react` 的 event 是合成对象
`event.nativeEvent`获取原生对象，所有事件都挂在 document 上

> 受控、未受控组件

```js
// 受控
<input value={this.state.value} onChange={this.handleChange} />
```

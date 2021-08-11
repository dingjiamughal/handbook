range api：https://juejin.cn/post/6945000129472659487

### step1 dom 在页面渲染

```html
<div class="aaa" id="bbb">
  <div>a</div>
  <div>b</div>
  <div>c</div>
</div>
```

`plugin-transform-react-jsx` 会把 `jsx` 转换成 `createElement`

```js
createElement(
  'div',
  { class: 'aaa', id: 'bbb' },
  createElement('div', null, '1'),
  createElement('div', null, '2'),
  createElement('div', null, '3')
);
```

接下来需要完善 `createElement` 函数，完成 `appendChild`

- 创建 dom
- 给 dom 添加属性
- 循环 children，执行插入过程

```js
function createElement(tagName, attrs, ...children) {
  // 创建 element
  let element = document.createElement(tagName);
  // 给创建好的 dom 赋值 attr
  Object.keys(attrs).forEach(attrName => element.setAttribute(attrName, attrs[attrName]));
  // 遍历 children，并插入到 element
  children.forEach(child => element.append(child));

  return element;
}
```

### 支持组件

上面只是单纯的接收标签类型，例如 `div`，需要支持 `react` 组件：

```js
class MyComponent extends Component {
  render() {
    return <div>haha</div>;
  }
}
```

class 的 render 中有我们想要的 jsx，取出来，同时要完成 给 dom 添加属性和循环插入 children，赋能交给 Component<br>
此外，对于`plugin-transform-react-jsx`来说，不仅仅

```js
class Component {
  constructor() {}

  setAttribute(attrName, attrValue) {
    this.props[attrName] = attrValue;
  }
  appendChild(component) {}
}
```

先放一放，既然组件使用了 class，对于普通的标签类型，也给弄成 class，在 createElement 遍历过程 new 一下即可完成从创建到挂载，把上面这些 setAttribute 和 appendChild 封装一下，最终把 dom 节点放在 this.root 上<br>

```js
class ElementWrapper {
  constructor(tagName) {
    this.root = document.createElement(tagName);
  }
  setAttribute(attrName, attrVal) {
    this.root.setAttribute(attrName, attrVal);
  }
  appendChild(component) {
    this.root.appendChild(component.root);
  }
}
```

抛开组件类型，对标签类型的 createElement 可以重写成：

```js
function createElement(tagName, attrs, ...children) {
  let element;

  if (typeof tagName === 'string') {
    element = new ElementWrapper(tagName); // 此时生成 {root: element}
  }
  if (attrs) {
    Object.keys(attrs).forEach(attrName => element.setAttribute(attrName, attrs[attrName]));
  }
  children.forEach(child => element.appendChild(child));

  return element;
}
```

现在加入 Component，比较头疼的是 Component 自身是一个闭环 要支持 children，和 createElement 不一样，每一个 createElement 自身就是一个最小单位，或者它里面的每一个 children 就是一个最小单位，例如`createElement(div, null, 123)` `createElement(div, null, createElement(div, null, 456))`<br>

```js
// 要满足这样的
class MyComponent extends Component {
  render() {
    return (
      <div>
        <div>my component</div>
        {this.children}
      </div>
    );
  }
}
```

在 Component 中的 appendChild 含义就是丰富 children 属性，this.children 在 Component 中是这样被定义的

```js
class Component {
  constructor() {
    this.children = [];
  }

  setAttribute(attrName, attrValue) {
    this.props[attrName] = attrValue;
  }
  appendChild(component) {
    this.children.push(component);
  }
}
```

这样再执行 element.appendChild 的时候就把真实 dom children 都添加到 this.children,交给 jsx

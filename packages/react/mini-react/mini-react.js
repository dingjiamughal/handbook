const renderToDom = Symbol('render to dom');

export class Component {
  constructor() {
    this.props = Object.create(null);
    this.children = [];
    this._root = null;
    this._range = null;
  }

  get vdom() {
    // 递归调用，如果依旧是个组件，会继续 get vdom => return this.render().vdom`
    return this.render().vdom;
  }

  setAttribute(name, value) {
    this.props[name] = value;
  }

  appendChild(component) {
    this.children.push(component);
  }

  [renderToDom](range) {
    this._range = range;
    // this.render()[renderToDom](range);

    // this._vdom相当于一个缓存，旧的vdom
    // 在 this.update 中进行 diff
    this._vdom = this.vdom;
    this._vdom[renderToDom](range);
  }

  // vdom 比对
  update() {
    const isSameNode = (oldNode, newNode) => {
      if (oldNode.type !== newNode.type) {
        return false;
      }

      const isExistDiffProp = Object.keys(newNode.props).some(attrName => {
        if (oldNode.props[attrName] !== newNode.props[attrName]) {
          return true;
        }
      });

      if (isExistDiffProp) {
        return false;
      }

      if (Object.keys(oldNode.props).length > Object.keys(newNode.props).length) {
        return false;
      }

      if (newNode.type === '#text') {
        if (newNode.content !== oldNode.content) {
          return false;
        }
      }
      return true;
    };

    const update = (oldNode, newNode) => {
      // 节点不一样，全部替换
      if (!isSameNode(oldNode, newNode)) {
        newNode[renderToDom](oldNode._range);
        return;
      }

      newNode._range = oldNode._range;

      const newChildren = newNode.vchildren;
      const oldChildren = oldNode.vchildren;

      if (!newChildren || !newChildren.length) {
        return;
      }
      let tailRange = oldChildren[oldChildren.length - 1]._range;

      newChildren.forEach((newChild, index) => {
        const oldChild = oldChildren[index];

        if (index < oldChildren.length) {
          update(oldChild, newChild);
        } else {
          // oldNode < newNode 需要从后插入
          const range = document.createRange();

          range.setStart(tailRange.endContainer, tailRange.endOffset);
          range.setEnd(tailRange.endContainer, tailRange.endOffset);
          newChild[renderToDom](range);

          tailRange = range;
        }
      });
    };

    const vdom = this.vdom;
    update(this._vdom, vdom);

    this._vdom = vdom;
  }

  // rerender() {
  //   const oldRange = this._range;

  //   const range = document.createRange();
  //   range.setStart(oldRange.startContainer, oldRange.startOffseet);
  //   range.setEnd(oldRange.startContainer, oldRange.startOffseet);

  //   this[renderToDom](range);

  //   oldRange.setStart(range.startContainer, range.startOffseet);
  //   oldRange.deleteContents();
  // }

  setState(newState) {
    if (this.state === null || typeof this.state !== 'object') {
      this.state = newState;
      this.update();

      return;
    }

    const merge = (oldState, newState) => {
      Object.keys(newState).forEach(key => {
        if (oldState[key] === null || typeof oldState[key] !== 'object') {
          oldState[key] = newState[key];
        } else {
          merge(oldState[key], newState[key]);
        }
      });
    };

    merge(this.state, newState);
    // this.rerender();
    this.update();
  }
}

class ElementWrapper extends Component {
  constructor(tagName) {
    super(tagName);
    this.type = tagName;
    // this.root = document.createElement(tagName);
  }

  // setAttribute(attrName, attrVal) {
  //   if (attrName.match(/^on([\s\S]+)/)) {
  //     this.root.addEventListener(
  //       RegExp.$1.replace(/^[\s\S]/, c => c.toLowerCase()),
  //       attrVal
  //     );
  //   } else {
  //     if (attrName === 'className') {
  //       this.root.setAttribute('class', attrVal);
  //     } else {
  //       this.root.setAttribute(attrName, attrVal);
  //     }
  //   }
  // }

  // appendChild(component) {
  //   let range = document.createRange();
  //   range.setStart(this.root, this.root.childNodes.length);
  //   range.setEnd(this.root, this.root.childNodes.length);
  //   range.deleteContents();

  //   component[renderToDom](range);
  //   // this.root.appendChild(component.root);
  // }

  get vdom() {
    this.vchildren = this.children.map(child => child.vdom);
    // return {
    //   type: this.type,
    //   props: this.props,
    //   children: this.children.map(child => child.vdom)
    // };
    return this;
  }

  // 在 render to dom 里 setAttr 和 this.appendChild
  [renderToDom](range) {
    this._range = range;

    const root = document.createElement(this.type);

    // 处理 props
    // setAttribute
    Object.keys(this.props).forEach(attrName => {
      if (attrName.match(/^on([\s\S]+)/)) {
        root.addEventListener(
          RegExp.$1.replace(/^[\s\S]/, c => c.toLowerCase()),
          this.props[attrName]
        );
      } else {
        if (attrName === 'className') {
          root.setAttribute('class', this.props[attrName]);
        } else {
          root.setAttribute(attrName, this.props[attrName]);
        }
      }
    });

    if (!this.vchildren) {
      this.vchildren = this.children.map(child => child.vdom);
    }

    // 处理 children 每一个 child 都是 component
    // appendChild
    this.vchildren.forEach(component => {
      let childRange = document.createRange();
      childRange.setStart(root, root.childNodes.length);
      childRange.setEnd(root, root.childNodes.length);
      // childRange.deleteContents();

      component[renderToDom](childRange);
    });

    replaceContent(range, root);
  }
}

class TextWrapper extends Component {
  constructor(content) {
    super(content);
    this.root = document.createTextNode(content);
    this.type = '#text';
    this.content = content;
  }

  get vdom() {
    return this;
  }

  [renderToDom](range) {
    this._range = range;

    const root = document.createTextNode(this.content);
    replaceContent(range, root);
  }
}

// dom 先增后删
function replaceContent(range, node) {
  range.insertNode(node);
  range.setStartAfter(node); // 把 range 指向 node 后，再删
  range.deleteContents();

  range.setStartBefore(node);
  range.setEndAfter(node);
}

export function createElement(tagName, attrs, ...children) {
  let element;
  if (typeof tagName === 'string') {
    element = new ElementWrapper(tagName);
  } else {
    element = new tagName();
  }
  //   给节点添加 attr
  if (attrs) {
    Object.keys(attrs).forEach(attrName => element.setAttribute(attrName, attrs[attrName]));
  }

  const insertChildren = children => {
    children.forEach(child => {
      if (typeof child === 'string') {
        child = new TextWrapper(child);
      }

      if (child === null) {
        return false;
      }
      //   console.log(child);
      if (child instanceof Array) {
        insertChildren(child);
      } else {
        element.appendChild(child);
      }
    });
  };

  insertChildren(children);

  return element;
}

export function render(component, app) {
  const range = document.createRange();

  range.setStart(app, 0);
  range.setEnd(app, app.childNodes.length);
  range.deleteContents();

  component[renderToDom](range);
}

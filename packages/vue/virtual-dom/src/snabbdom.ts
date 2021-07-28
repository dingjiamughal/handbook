import { init, classModule, propsModule, styleModule, eventListenersModule, h } from 'snabbdom';

// const patch = init([
//   // Init patch function with chosen modules
//   classModule, // makes it easy to toggle classes
//   propsModule, // for setting properties on DOM elements
//   styleModule, // handles styling on elements with support for animations
//   eventListenersModule // attaches event listeners
// ]);
const patch = init([]);

const app = document.getElementById('app')!;

// const vnode = h('div#app.xixi', [h('p', 'hahaha'), h('p', 'xixiix')]);
const vnode = h('div.xixi', 'xixi');
const prevVnode = patch(app, vnode); // 替换新旧节点

// const vnode2 = h('div#app.xixi', [
//   h('p', { style: { color: 'red' } }, '我很红'),
//   h('button', { on: { click: handleClick } }, '点我')
// ]);
// patch(prevVnode, vnode2);

function handleClick() {
  console.log('点我');
}
// setTimeout(() => patch(vnode2, h('!')), 2000);

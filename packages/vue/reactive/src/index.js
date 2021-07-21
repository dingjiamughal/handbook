const { eventFormat, bindEvent } = require('./compile/event');
const { stateFormat } = require('./compile/state');
const { reactive } = require('./reactive');

function App() {
  const state = reactive({
    name: 'dingjia',
    hobby: ['sing', 'dance', 'rap'],
    info: { sex: 'male', job: 'fe' },
    count: 0
  });

  const add = num => (state.count += num);
  const minus = num => (state.count -= num);

  return {
    template: `<div>
        <div>{{ count }}</div>
        <div>{{ info.job }}</div>
        <button onClick="add(2)">+</button>
        <button onClick="minus(1)">-</button>
      </div>`,
    state,
    methods: {
      add,
      minus
    }
  };
}

function renderDom(app, dom) {
  let { template, state, methods } = app;

  // data-v=123 + addEventListener
  template = eventFormat(template);
  // 初始化 state
  template = stateFormat(template, state);

  dom.innerHTML = template;
  bindEvent(methods);
}

renderDom(App(), document.getElementById('app'));

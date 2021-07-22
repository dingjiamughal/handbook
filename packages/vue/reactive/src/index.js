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
  const changeJob = job => (state.info.job = job);

  return {
    template: `<div>
        <div>{{ count }}</div>
        <div>{{ info.job }}</div>
        <button onClick="add(2)">+</button>
        <button onClick="minus(1)">-</button>
        <button onClick="changeJob('backend')">change job</button>
      </div>`,
    state,
    methods: {
      add,
      minus,
      changeJob
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

export function update(statePool, key, value) {
  const allElements = document.getElementsByTagName('*');

  statePool.forEach(item => {
    if (item.state[item.state.length - 1] === key) {
      [...allElements].forEach(element => {
        if (parseInt(element.dataset.v) === item.flag) {
          element.innerHTML = value;
        }
      });
    }
  });
}

renderDom(App(), document.getElementById('app'));

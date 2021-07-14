const { default: eventFormat } = require('./compile/event');
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
        <div>{{count}}</div>
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

function renderDom({ template, state, methods }, dom) {
  template = eventFormat(template);

  console.log(template);

  dom.innerHTML = template;
}

renderDom(App(), document.getElementById('app'));

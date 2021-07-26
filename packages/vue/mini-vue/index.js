import { reactive, watchEffect } from './reactive';

// const state = reactive({
//   user: 'dingjia',
//   count: 0
// });

// watchEffect(() => {
//   const b = state.count;
//   console.log(b);
// });

// state.count = 10;

const App = {
  render(context) {
    watchEffect(() => {
      document.body.innerHTML = '';

      const div = document.createElement('div');
      div.innerHTML = context.state.count;
      document.body.appendChild(div);
    });
  },
  setup() {
    const state = reactive({ count: 0 });

    window.state = state;
    return { state };
  }
};

App.render(App.setup());

export default {
  install(Vue) {
    Vue.component('ElButton', {
      //   props: {
      //     text: String
      //   },
      render(h) {
        return h(
          'button',
          {
            on: {
              click: this.handleClick
            }
          },
          [this.$slots.default]
        );
      },
      methods: {
        handleClick() {
          console.log('点我');
        }
      }
    });
  }
};

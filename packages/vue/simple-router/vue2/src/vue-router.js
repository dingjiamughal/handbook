let _Vue = null;

export default class VueRouter {
  constructor(options) {
    this.options = options;
    this.routeMap = {};
    this.data = _Vue.observable({
      current: '/'
    });
  }
  static install(Vue) {
    // 判断当前插件是否已被安装
    if (VueRouter.install.installed) {
      return;
    }

    VueRouter.install.installed = true;
    // 把Vue构造函数记录到全局
    _Vue = Vue;
    // 把创建Vue实例传入的router对象注入到Vue实例上
    _Vue.mixin({
      beforeCreate() {
        if (this.$options.router) {
          _Vue.prototype.$router = this.$options.router;

          this.$options.router.init();
        }
      }
    });
  }

  init() {
    this.createRouteMap();
    this.initComponents(_Vue);
    this.initEvent();
  }

  // 遍历 routes 解析成 Record<k, v> 存储到 routeMap 中
  createRouteMap() {
    this.options.routes.forEach(route => {
      this.routeMap[route.path] = route.component;
    });
  }

  initComponents(Vue) {
    // 创建 RouterLink
    Vue.component('router-link', {
      props: {
        to: String
      },
      // template: '<a :href="to"><slot></slot></a>'
      render(h) {
        return h(
          'a',
          {
            attrs: { href: this.to },
            on: {
              // 更改浏览器地址，并且不发送请求 pushState
              click: this.handleClick
            }
          },
          [this.$slots.default]
        );
      },
      methods: {
        handleClick(e) {
          history.pushState({}, '', this.to);
          this.$router.data.current = this.to;
          e.preventDefault();
        }
      }
    });

    const self = this;
    Vue.component('router-view', {
      render(h) {
        const component = self.routeMap[self.data.current];
        return h(component);
      }
    });
  }

  initEvent() {
    window.addEventListener('popstate', () => {
      this.data.current = window.location.pathname;
    });
    window.addEventListener('DOMContentLoaded', () => {
      this.data.current = window.location.pathname;
    });
  }
}

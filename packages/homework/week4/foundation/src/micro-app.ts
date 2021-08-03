import store from './store';

const microApps = [
  {
    name: 'sub-vue',
    entry: '//localhost:8084/',
    activeRule: '/sub-vue'
  },
  {
    name: 'sub-react',
    entry: '//localhost:8102/',
    activeRule: '/sub-react'
  }
];

const apps = microApps.map(item => {
  return {
    ...item,
    container: '#subapp-viewport', // 子应用挂载的div
    props: {
      routerBase: item.activeRule, // 下发基础路由
      getGlobalState: store.getGlobalState // 下发getGlobalState方法
    }
  };
});

export default apps;

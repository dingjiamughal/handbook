<template>
  <div class="layout-wrapper">
    <div class="layout-header">
      <div class="logo">QIANKUN-EXAMPLE</div>
      <ul class="sub-apps">
        <li
          v-for="item in microApps"
          :class="{ active: item.activeRule === current }"
          :key="item.name"
          @click="goto(item)"
        >
          {{ item.name }}
        </li>
      </ul>
      <div class="userinfo">主应用的state：{{ JSON.stringify(user) }}</div>
    </div>
    <div id="subapp-viewport"></div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import microApps from './micro-app';
import store from './store';

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    const goto = item => {
      history.pushState(null, item.activeRule, item.activeRule);
      // this.current = item.name
    };

    return {
      microApps,
      user: computed(() => store.getGlobalState('user')),
      goto
    };
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

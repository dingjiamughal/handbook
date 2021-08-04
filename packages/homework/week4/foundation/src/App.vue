<template>
  <div class="layout-wrapper">
    <div class="layout-header">
      <div>基座</div>
      <button @click="goto('/sub-vue')">sub vue</button>
    </div>
    <div id="subapp-viewport"></div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    const goto = path => {
      history.pushState(null, path, path);
    };

    return {
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

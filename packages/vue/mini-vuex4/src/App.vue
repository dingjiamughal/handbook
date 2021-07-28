<template>
  <div>
    <h2>mini-vuex4</h2>
    <div>{{ $store.state.x }}</div>
    <div>{{ $store.getters.xx }}</div>
    <button @click="handleClick">sync</button>
    <button @click="handleClickAsync">async</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from './vuex';

export default defineComponent({
  name: 'App',
  components: {},
  setup(ctx, props) {
    const store = useStore();
    console.log(store);

    const handleClick = () => {
      store.commit('setX', 12);
    };

    const handleClickAsync = () => {
      store.dispatch('getX', 15);
    };

    return {
      handleClick,
      handleClickAsync

      // xx: computed(() => store.getters.xx)
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

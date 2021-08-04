<template>
  <div>
    <ul>
      <li v-for="(item, key) in articleMap" :key="item">
        <button @click="handleClick(key)">{{ key }}</button>
      </li>
    </ul>
    <div>{{ article }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 1,
      articleMap: {
        1: '文章111',
        2: '文章222',
        3: '文章333',
        4: '文章444'
      }
    };
  },
  methods: {
    handleClick(id) {
      this.$router.push({ name: 'article', params: { id } });
    }
  },
  computed: {
    article() {
      return this.articleMap[this.current];
    }
  },
  mounted() {},
  watch: {
    '$route.params'(val) {
      this.current = val.id;
    }
  }
};
</script>

<style></style>

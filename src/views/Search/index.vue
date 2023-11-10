<template>
  <div>
    <!-- <h1>params参数：{{ $route.params.keyword }}</h1> -->
    <!-- <h1>query参数：{{ $route.query.upperCase }}</h1> -->
    <h1>params参数：{{ keyword }}</h1>
    <h1>query参数：{{ $route.query.upperCase }}</h1>
    <h2>{{ a }}&nbsp;&&&nbsp;{{ b }}</h2>
  </div>
</template>

<script>
export default {
  name: 'sph-search',
  props: ['keyword', 'a', 'b'],
  data() {
    return {}
  },
}
</script>

<style></style>

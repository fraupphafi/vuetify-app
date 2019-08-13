<template>
  <v-app class="app">
    <v-content>
      <router-view></router-view> 
    </v-content>
  </v-app>
</template>

<script>
import router from './router.js';

export default {
  name: 'App',
  components: {
    router
  }
};
</script>

<style lang="scss">
body {
  font-family: 'Ubuntu', sans-serif;
  padding: 0;
  margin: 0;
}
.app {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}
</style>

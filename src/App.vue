<template>
  <v-app class="app">
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify </span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

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

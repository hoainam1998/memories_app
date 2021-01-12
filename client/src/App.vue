<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>

import Header from './components/Header'
export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style>
*,*:before,*:after {
  padding: 0; margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: Arial, Helvetica, sans-serif;
}


</style>

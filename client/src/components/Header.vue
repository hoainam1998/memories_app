<template>
  <header>
      <h1>Memories App </h1>
      <router-link to="/">Home</router-link>
      <router-link to="/image">Images</router-link>
  </header>
</template>
<script>
export default {};
</script>
<style scoped>
header {
    padding: 7px 0;
    background: black;
    color: white;
    text-align: center;
}
a {
    color: inherit;
    text-decoration: none;
}

a[href="#/"] {
    margin-right: 10px;
}
</style>
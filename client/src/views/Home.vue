<template>
  <main><MemoriesContainer /> <Form /></main>
</template>
<script>
import Form from "../components/Form.vue";
import MemoriesContainer from "../components/MemoriesContainer";
export default {
  name: "Home",
  components: {
    Form,
    MemoriesContainer,
  },
};
</script>
<style scoped>
main {
  display: grid;
  grid-template-columns: 75% 23%;
  grid-column-gap: 2%;
  padding: 1rem;
}

@media(max-width:900px){
    main {
        grid-template-columns: 60% 38%;
    }
}
</style>
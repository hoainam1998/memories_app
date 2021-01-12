<template>
  <main>
    <ul>
      <li v-for="memory in allMemories" :key="memory.id">
        <img :src="`${memory.url}`" alt="img" />
      </li>
    </ul>
  </main>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ImageCollection",
  computed: mapGetters(["allMemories"]),
  methods: {
    ...mapActions(["setAllMemories"]),
  },
  async created() {
    await this.setAllMemories();
  },
};
</script>
<style scoped>
ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(150px,1fr));
    grid-gap: 7px;
    padding: 1rem;
}

li {
    width: 100%;
    height: 120px;
    overflow: hidden;
}

li img {
    width: 100%; height: 100%;
    transition: .5s transform ease;
    filter:blur(8px);
}

li img:hover {
    filter: blur(0);
    transform: scale(1.2)
}
</style>
<template>
  <form @submit.prevent="createMemories" id="memories_form">
    <div class="mb-3">
      <label class="form-label">Do something... </label>
      <input type="text" class="form-control" name="title" v-model="title" />
    </div>
    <div class="mb-3">
      <label class="form-label">Make beutiful photo</label>
      <input class="form-control" type="file" name="image" />
    </div>
    <button type="submit" class="btn btn-primary w-100">Submit</button>
  </form>
</template>
<script>
import { mapActions } from "vuex";
import $ from "jquery";
export default {
  name: "Form",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions(["addMemories"]),
    createMemories() {
      const newMemories = new FormData($("#memories_form")[0]);
      this.addMemories(newMemories);
    },
  },
};
</script>
<style scoped>
</style>
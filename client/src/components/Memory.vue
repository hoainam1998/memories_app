<template>
  <div class="item">
    <img :src="`${memory.url}`" />
    <span>{{ memory.title }}</span>
    <div class="btn-group">
      <button class="update" @click="upd(memory.id)"><i class="fas fa-pen"></i></button>
      <button class="delete" @click="del(memory.id)"><i class="fas fa-trash"></i></button>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: "Memory",
  props: ["memory"],
  methods:{
    ...mapActions(['updateMemories','deleteMemories']),
    upd(id){
      this.updateMemories(id);
    },
    del(id){
      this.deleteMemories(id);
    }
  }
};
</script>

<style scoped>
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ecf0f1;
  border-radius: 4px;
  padding: 0 10px;
  padding-top: 120px;
  text-align: center;
  height: 100%;
  position: relative;
}

.item span {
  line-height: 1.2;
}

.item img {
  width: 120px;
  position: absolute;
  transform: translateY(-15px);
  top: 0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: .5s ease;
}

.item img:hover { 
  transform: translateY(1px);
}

.btn-group {
  position: absolute;
  bottom: 4px;
  background: #ecf0f1;
  width: 100%;
  display: flex;
  justify-content: center;
}

.btn-group button:first-child {
  margin-right: 5px;
}

.update,.delete {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: pink;
  font-size: 12px;
  border: none;
  color: white;
  cursor: pointer;
  outline: none;
}
</style>

<template>
    <ul class="listMemories">
      <li v-for="memory in allMemories" :key="memory.id">
        <Memory v-bind:memory="memory"/>
      </li>
    </ul>
</template>
<script>
import Memory from './Memory'
import {mapGetters,mapActions} from 'vuex'
export default {
    name: "ContainerMemory",
    components: {
        Memory
    },
    computed:mapGetters(['allMemories']),
    methods: {
        ...mapActions(['setAllMemories'])
    },
    async created(){
        await this.setAllMemories();
    }
}
</script>
<style scoped>
.listMemories {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(5,1fr);
  grid-auto-rows: 225px;
  grid-column-gap: 15px;
  grid-row-gap: 25px;
}

@media (max-width:1300px){
  .listMemories { 
    grid-template-columns: repeat(4,1fr);
  }
}

@media (max-width: 1080px){
  .listMemories { 
    grid-template-columns: repeat(3,1fr);
  }
}

@media (max-width: 922px){
  .listMemories { 
    grid-template-columns: repeat(2,1fr);
  }
}

@media (max-width: 768px){
  .listMemories { 
    grid-template-columns: 1fr;
  }
}
</style>
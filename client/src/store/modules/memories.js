import axios from 'axios'
const state={
    memories:[]
};

const getters={
    allMemories:(state)=>(state.memories)
};

const actions={
    async setAllMemories({commit}){
        const memoriesData=await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=20')
        console.log(memoriesData.data)
        commit('setMemories',memoriesData.data)
    },

    async addMemories({commit},newMemories){
        const res=await axios.post('http://localhost:5000/api/memories',newMemories)
        commit('addMemories',res.data);
    },

    async deleteMemories({commit},id){
        commit('deleteMemories',id);
    },

    async updateMemories({commit},id){
        commit('updateMemories',id)
    }
};

const mutations={
    setMemories:(state, memoriesData)=>{state.memories=memoriesData},
    addMemories:(state,newMemories)=>{console.log(newMemories)},
    deleteMemories:(state,id)=>{state.memories=state.memories.filter(memory=>memory.id!==id)},
    updateMemories:(state,id)=>{console.log('update'+id)}
};

export default {state,getters,actions,mutations}
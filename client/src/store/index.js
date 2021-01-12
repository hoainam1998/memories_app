import Vue from 'vue'
import Vuex from 'vuex'
import memories from './modules/memories'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        memories
    }
})
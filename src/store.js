import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    year: new Date().getFullYear(),
    id: 0
  },
  mutations: {
    changeID(state, payload){
        state.id = payload
    },
    changeYear(state, payload){
        state.year = payload
    }
   
  },
  actions: {
   
  }
})
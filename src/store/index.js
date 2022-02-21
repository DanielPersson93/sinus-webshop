import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    query:"",
    products:["kalle","kalas","karl","3","4","5"]
  },
  mutations: {
    setQuery(state,input){
      state.query=input
    },
  },
  getters:{
    resultsLimited(state, ){
      return state.products.filter(product => product.toUpperCase() == state.query.toUpperCase())
      // arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()
      // return state.products.filter(product => product[0] == state.query[0])



        
    },
  },
  actions: {
  },
  modules: {
  }
})

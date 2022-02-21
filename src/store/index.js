import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    query:"",
    products:["kalle","kalle","kalle","kalle","kalas","karl","3","4","5"]
  },
  mutations: {
    setQuery(state,input){
      state.query=input
    },
  },
  getters:{
    resultsLimited(state, ){
      // return state.products.filter(product => product.toUpperCase() == state.query.toUpperCase())

      // arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase() FEL
      // return state.products.filter(product => product[0] == state.query[0]) FEL

      // for(const product of state.products){kanske funkar nån gång
      //   for(let i=0; i<product.length; i++){
      //     if(product[i].toUpperCase() == state.query.toUpperCase())
      //     return product
      //   }
      // }   
      let searchLoot=[];
           if(state.query.length>0){

      for(const product of state.products){

        let produkt=product.toUpperCase()
        if(produkt.includes(state.query.toUpperCase())){
          searchLoot.push(produkt)
        }      

      }}
            return searchLoot



        
    },
  },
  actions: {
  },
  modules: {
  }
})

import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    query:"",
    products:["kalle","kalas","karl","3","4","5"],
    allProducts: []
  },
  mutations: {
    setQuery(state,input){
      state.query=input
    },
    saveProducts(state, allProducts){
      for (const products of allProducts){
      state.allProducts.push(products)
      }
      // state.allProducts.push(allProducts)
      // console.log("testernas test")
      console.log(allProducts)
    },
  },
  getters:{
    resultsLimited(state, ){
      return state.products.filter(product => product.toUpperCase() == state.query.toUpperCase())
      // arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()
      // return state.products.filter(product => product[0] == state.query[0])  
    }
  },

  // for (products of allProducts) {         state.allProducts.push[products]       }

  actions: {
/*     async fetchAllProducts(context){
      const response = await API.getAllProducts()
      context.commit('saveProducts', response.data.products)
      console.log(response.data.products)
    }, */
    async getProductsAction(context, payloadCategory){
        const response = await API.fetchCategory(payloadCategory)
        context.commit('saveProducts', response.data.products)  
    },
    async fetchApparel(context){
      const response = await API.fetchApparel()
      context.commit('saveProducts', response.data.products) 
      console.log(response.data.products)
  }
  },
  modules: {
  }
})

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
      state.allProducts.push(allProducts)
      // console.log("testernas test")
      // console.log(allProducts)
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
        let produkt=product.toLowerCase()
        if(produkt.includes(state.query.toLowerCase())){
          let capitalProduct="";
          for(let i=0; i<produkt.length; i++){
            if(i==0){
             capitalProduct+=produkt[i].toUpperCase()
            }
            else capitalProduct+=produkt[i]
          }      
          searchLoot.push(capitalProduct)
          // produkt[0].toUpperCase()
          // searchLoot.push(produkt)
        }     
      }
            }
            return searchLoot
    },
      // return state.products.filter(product => product.toUpperCase() == state.query.toUpperCase())
      // arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()
      // return state.products.filter(product => product[0] == state.query[0])  
  //   }
  // },
},
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

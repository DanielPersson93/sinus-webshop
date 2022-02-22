import Vue from "vue";
import Vuex from "vuex";
import * as API from "@/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    query: "",
    products: ["kalle", "kalas", "karl", "3", "4", "5"],
    allProducts: [],
    user: {},
    token: "",
    order: null,
  },
  mutations: {
    setQuery(state, input) {
      state.query = input;
    },
    saveProducts(state, allProducts){
      for (const products of allProducts) {
        state.allProducts.push(products)
      }
    },
    saveUser(state, user) {
      state.user = user;
    },
    saveToken(state, token){
      state.token = token
    },
    saveOrder(state, order){
      state.order = order
    }
  },
  actions: {
    async getProductCategory(context, category) {
      const response = await API.getProductCategory(category);
      context.commit("saveProducts", response.data.products);
    },
    async fetchApparel(context) {
      const response = await API.fetchApparel();
      context.commit("saveProducts", response.data.products);
    },
    async fetchSkate(context){
      const response = await API.fetchSkate()
      context.commit('saveProducts', response.data.products) 
    },
    async registerUser(context, user) {
      context.commit("saveUser", user);
      await API.registerUser(user);
    },
    async loginUser(context,credentials) {
      const response = await API.loginUser(credentials.email, credentials.password)
      context.commit("saveToken", response.data.token)
      API.saveToken(response.data.token)
    },
    async makeOrder(context, order){
      const response = await API.makeOrder(order)
      context.commit("saveOrder", response.data)
      // console.log('så jävla dryga',context, response)
    },
    async getOrder(context){
      const response = await API.getOrder()
      context.commit("saveOrder", response.data)
      console.log(response.data);
    }
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
  modules: {},
});

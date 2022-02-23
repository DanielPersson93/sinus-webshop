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
    cart: {items:[]},
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
      // reaktiv för att rendera
      // Vue.set(state.posts, blogPost.id, blogPost)
      // state.posts[blogPost.id] = blogPost
    },
    saveToken(state, token){
      state.token = token
    },
    // saveOrder(state, order){
    //   state.order = order
    // },
    // saveInCart(state, product){
    //   state.cart.items.push(product)
    // }
  },
  actions: {
    async getProductCategory(context, category) {
      const response = await API.getProductCategory(category);
      context.commit("saveProducts", response.data);
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
    // async placeOrder(context,){
    //   const response = await API.placeOrder(this.state.cart)
    //   context.commit("saveOrder", response.data)
    // },
    async getOrder(context){
      const response = await API.getOrder()
      context.commit("saveOrder", response.data)
      console.log(response.data);
    },
    // addItemToCart(context, product){
    //   context.commit("saveInCart", product)
    // }
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

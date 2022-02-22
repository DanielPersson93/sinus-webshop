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
  },
  mutations: {
    setQuery(state, input) {
      state.query = input;
    },
    saveProducts(state, allProducts){
      state.allProducts.push(allProducts)
      // console.log("testernas test")
      // console.log(allProducts)
    },
    saveUser(state, user) {
      state.user = user;
      console.log("hej", state.user);
    },
  },
  getters: {
    resultsLimited(state) {
      return state.products.filter(
        (product) => product.toUpperCase() == state.query.toUpperCase()
      );
      // arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()
      // return state.products.filter(product => product[0] == state.query[0])
    },
  },

  actions: {
    /*     async fetchAllProducts(context){
      const response = await API.getAllProducts()
      context.commit('saveProducts', response.data.products)
      console.log(response.data.products)
    }, */
    async getProductsAction(context, payloadCategory) {
      const response = await API.fetchCategory(payloadCategory);
      context.commit("saveProducts", response.data.products);
    },
    async fetchApparel(context) {
      const response = await API.fetchApparel();
      context.commit("saveProducts", response.data.products);
      console.log(response.data.products);
    },
    registerUser(context, user) {
      context.commit("saveUser", user);
      API.saveUser(user);
      // console.log("response", response);

      // const response = API.saveUser();
      // console.log(response.data);
    },
    async fetchApparel(context){
      const response = await API.fetchApparel()
      context.commit('saveProducts', response.data.products) 
      console.log(response.data.products)
  },
    async fetchSkate(context){
      const response = await API.fetchSkate()
      context.commit('saveProducts', response.data.products) 
      console.log(response.data.products)
  }
  },
  modules: {},
});

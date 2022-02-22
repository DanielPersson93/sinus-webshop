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
    }
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
    }
  },
  modules: {},
});

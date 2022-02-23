import Actions from "@/store/actions.js"
import Mutations from "@/store/mutations.js"
// import Vue from "vue"
import API from "@/api/index.js"

export default {
    state: () => ({
        order: null,
        cart: {items:[]},
    }),
    mutations: {
        [Mutations.SAVE_ORDER](state, order){
            state.order = order
        },
        [Mutations.SAVE_CART](state, product){
            state.cart.items.push(product)
          }
    },
    actions: {
        [Actions.PLACE_ORDER](context){
            const response = await API.placeOrder(this.state.cart)
            context.commit(Mutations.SAVE_ORDER, response.data)
        },
        [Actions.ADD_TO_CART](context, product){
            context.commit(Mutations.SAVE_CART, product)
          }
    }
}
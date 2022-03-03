import Vue from "vue";
import Vuex from "vuex";
// import Actions from './action.types'
// import Mutations from './mutation.types'
// import OrderModule from './order.modules'
import * as API from "@/api";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		allProducts: [],
		productList: {},
		user: {},
		token: "",
		order: null,
		cart: [],
	},
	mutations: {
		saveSingleProduct(state, product){
			state.allProducts.push(product)
			Vue.set(state.productList, product.id, product);
		},
		saveProducts(state, allProducts) {
			for (let product of allProducts) {
				if (!state.allProducts.find((productInStore) => productInStore.id == product.id)){
					state.allProducts.push(product);
					Vue.set(state.productList, product.id, product);
				}
			}
		},
		saveUser(state, user) {
			state.user = user;
		},
		saveToken(state, token) {
			state.token = token;
		},
		saveOrder(state, order) {
			state.order = order;
		},
		saveInCart(state, product) {
			const inCart = state.cart.find((cartItem) => cartItem.id == product.id);
			if (inCart) {
				inCart.amount++;
			} else state.cart.push({ id: product.id, amount: 1 });
		},
		removeFromCart(state, product) {
			const inCart = state.cart.find((cartItem) => cartItem.id == product.id);
			if (inCart) {
				state.cart.splice(state.cart.indexOf(inCart), 1);
			}
		},
	},
	actions: {
		async getSingleProduct(context, productId){
			if (!context.state.allProducts.find((product) => product.id == productId)) {
				const response = await API.getSingleProduct(productId);
				context.commit("saveSingleProduct", response.data.post);
			} else {
				return;
			}
		},
		async getProductCategory(context, category) {
			let categoryLength = context.state.allProducts.filter((allProducts) => allProducts.category == 'skateboard')
			if(categoryLength.length == 1){
				const response = await API.getProductCategory('skateboard');
				context.commit("saveProducts", response.data);
			}
			if (!context.state.allProducts.find((product) => product.category == category)) {
				const response = await API.getProductCategory(category);
				context.commit("saveProducts", response.data);
			} else {
				return;
			}
		},
		async registerUser(context, user) {
			context.commit("saveUser", user);
			const response = await API.registerUser(user);
			context.commit("saveToken", response.data.token);
			API.saveToken(response.data.token);
		},
		async loginUser(context, credentials) {
			const response = await API.loginUser(
				credentials.email,
				credentials.password
			);
			context.commit("saveToken", response.data.token);
			API.saveToken(response.data.token);
		},
		async getUser(context){
            const response = await API.currentUser();
            context.commit("saveUser", response.data)
        },

		async placeOrder(context, address) {
			let shippingAddress = address
			let order = { items: [], shippingAddress };
			for (const cartItem of this.state.cart) {
				if (cartItem.amount > 1) {
					for (let i = 0; i < cartItem.amount; i++) {
						order.items.push(cartItem.id);
					}
				} else order.items.push(cartItem.id);
			}
			const response = await API.placeOrder(order);
			context.commit("saveOrder", response.data);
		},
		async getOrder(context) {
			const response = await API.getOrder();
			context.commit("saveOrder", response.data);
		},
		addItemToCart(context, product) {
			context.commit("saveInCart", product);
		},
		removeFromCart(context, product) {
			context.commit("removeFromCart", product);
		},
	},

	getters: {
		shoppingCart(state) {
			return state.cart.map((cartItem) => ({
				...state.productList[cartItem.id],
				amount: cartItem.amount,
			}));
		},
		getSelectedCategory: (state) => (category) =>
			state.allProducts.filter((product) => product.category == category),
	},
});

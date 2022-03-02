import Vue from "vue";
import Vuex from "vuex";
// import Actions from './action.types'
// import Mutations from './mutation.types'
// import OrderModule from './order.modules'
import * as API from "@/api";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		// query: "",
		allProducts: [],
		productList: {},
		user: {},
		token: "",
		order: null,
		cart: [],
	},
	mutations: {
		// setQuery(state, input) {
		// 	state.query = input;
		// },
		saveProducts(state, allProducts) {
			for (let product of allProducts) {
				state.allProducts.push(product);
				Vue.set(state.productList, product.id, product);
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
		async getProductCategory(context, category) {
			if (
				!context.state.allProducts.find(
					(product) => product.category == category
				)
			) {
				const response = await API.getProductCategory(category);
				context.commit("saveProducts", response.data);
			} else {
				return;
			}
		},
		// async fetchApparel(context) {
		// 	if (!context.state.allProducts.find((product) => product.category == 'cap')){
		// 		const response = await API.fetchApparel();
		// 		context.commit("saveProducts", response.data);
		// 	} else {
		// 		return
		// 	}
		// },
		// async fetchSkate(context) {
		// 	if (!context.state.allProducts.find((product) => product.category == 'skateboard')){
		// 		const response = await API.fetchSkate();
		// 		context.commit("saveProducts", response.data);
		// 	} else {
		// 		return
		// 	}
		// 	// const response = await API.fetchSkate();
		// 	// console.log(response)
		// 	// console.log(response.data)
		// 	// context.commit("saveProducts", response.map((response) => response.data));

		// },
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
		async placeOrder(context) {
			let order = { items: [] };
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
			console.log(response.data);
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

		// resultsLimited(state) {
		// 	let searchLoot = [];
		// 	if (state.query.length > 0) {
		// 		for (const product of state.products) {
		// 			let produkt = product.toLowerCase();
		// 			if (produkt.includes(state.query.toLowerCase())) {
		// 				let capitalProduct = "";
		// 				for (let i = 0; i < produkt.length; i++) {
		// 					if (i == 0) {
		// 						capitalProduct += produkt[i].toUpperCase();
		// 					} else capitalProduct += produkt[i];
		// 				}
		// 				searchLoot.push(capitalProduct);
		// 			}
		// 		}
		// 	}
		// 	return searchLoot;
		// },
	},
});

<template>
	<div class="nav-wrap">
		<div class="abso">
			<ShoppingCart
				v-if="showCart"
				@closeCart="toggleCart"
				:products="productsInCart"
			/>
			<Login
				v-if="loginField"
				@closed="loginField = false"
				@openForm="openForm"
			/>
			<SignUp v-if="openSignUpForm" @closeSignUpForm="toggleOpenCloseForm" />
		</div>
		<img src="@/assets/sinuslogo.svg" alt="" class="sinus-logo" />
		<section class="links">
			<router-link to="/" class="underlined"><h5>HOME</h5></router-link>

			<div
				class="category"
				@mouseover="hoverSkate = true"
				@mouseleave="hoverSkate = false"
			>
				<h5 class="par underlined">SKATE</h5>
				<ul class="theUl" v-if="hoverSkate">
					<router-link
						:to="{ name: 'ProductView', query: { category: 'skateboard' } }"
					>
						<li class="listI" @click="assignCategory('skateboard')">Boards</li>
					</router-link>
					<router-link
						:to="{ name: 'ProductView', query: { category: 'wheel' } }"
					>
						<li class="listI" @click="assignCategory('wheel')">Wheels</li>
					</router-link>
				</ul>
			</div>
			<div
				class="category"
				@mouseover="hoverApparel = true"
				@mouseleave="hoverApparel = false"
			>
				<h5 class="par underlined">APPAREL</h5>

				<ul class="theUl" v-if="hoverApparel">
					<router-link
						:to="{ name: 'ProductView', query: { category: 'hoodie' } }"
					>
						<li class="listI" @click="assignCategory('hoodie')">Hoodies</li>
					</router-link>

					<router-link
						:to="{ name: 'ProductView', query: { category: 'tshirt' } }"
					>
						<li class="listI" @click="assignCategory('tshirt')">T-shirts</li>
					</router-link>

					<router-link
						:to="{ name: 'ProductView', query: { category: 'socks' } }"
					>
						<li class="listI" @click="assignCategory('socks')">Socks</li>
					</router-link>

					<router-link
						:to="{ name: 'ProductView', query: { category: 'totebag' } }"
					>
						<li class="listI" @click="assignCategory('totebag')">Bags</li>
					</router-link>

					<router-link
						:to="{ name: 'ProductView', query: { category: 'cap' } }"
					>
						<li class="listI" @click="assignCategory('cap')">Headwear</li>
					</router-link>
				</ul>
			</div>
		</section>

		<section class="search-field">
			<!-- <img
				class="icon expand"
				src="@/assets/search-icon.svg"
				alt=""
				@click="search"
			/>

			<section class="result">
				<input
					type="text"
					placeholder="Search.."
					@keyup="setQuery"
					@keyup.enter="search"
					v-model="searchInput"
					class="search-results-parent"
				/>
				<ul class="search-results" v-if="searchInput.length > 0">
					<li
						v-for="(product, index) in $store.getters.resultsLimited"
						:key="index"
						class="result-items"
						@click="temp"
					>
						{{ product }}
					</li>
				</ul>
			</section> -->
			<img
				class="icon expand"
				src="@/assets/bag.svg"
				@click="toggleCart"
				alt=""
			/>
			<img
				class="icon expand"
				src="@/assets/profile.svg"
				alt=""
				@click="openLogin"
			/>
		</section>
	</div>
</template>

<script>
	import Login from "@/components/Login.vue";
	import SignUp from "@/components/SignUp.vue";
	import ShoppingCart from "@/components/ShoppingCart.vue";
	export default {
		components: {
			Login,
			SignUp,
			ShoppingCart,
		},
		data() {
			return {
				// searchInput: "",
				token: "",
				hoverApparel: false,
				hoverSkate: false,
				openSignUpForm: false,
				loginField: false,
				showCart: false,
			};
		},

		methods: {
			toggleCart() {
				this.showCart = !this.showCart;
			},
			toggleOpenCloseForm() {
				this.openSignUpForm = !this.openSignUpForm;
			},
			openForm() {
				this.openSignUpForm = !this.openSignUpForm;
				this.loginField = !this.loginField;
			},
			// setQuery() {
			// 	this.$store.commit("setQuery", this.searchInput);
			// },

			openLogin() {
				this.token = localStorage.getItem("authToken");
				if (this.$store.state.token || this.token) {
					this.$router.push("/profile");

					// this.$route.push({ name: "Profile" });
				} else this.loginField = true;
			},

			// search() {
			// 	this.$router.push({
			// 		name: "Products",
			// 		query: { "": this.searchInput },
			// 	});
			// },

			assignCategory(category) {
				this.$store.dispatch("getProductCategory", category);
				console.log(category);
			},
			// getSkate() {
			// 	this.$store.dispatch("fetchSkate");
			// 	this.$router.push("productview");
			// },
			// getApparel() {
			// 	this.$store.dispatch("fetchApparel");
			// 	this.$router.push("productview");
			// },
		},
		computed: {
			productsInCart() {
				return this.$store.getters.shoppingCart;
			},
			// getQuery() {
			// 	return this.$store.state.query;
			// },
		},
	};
</script>

<style lang="scss" scoped>
	.icon {
		font-size: 1.8rem;
		color: black;
		cursor: pointer;
	}

	.nav-wrap {
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		display: flex;
		padding: 1rem 2.5rem;
		align-items: center;
		justify-content: space-between;
		position: relative;
	}

	.links {
		display: flex;
		justify-content: space-between;
		gap: 7rem;
		align-items: center;
	}

	input {
		padding: 0.4rem 1rem;
		border-radius: 10px;
		border: solid black 2.5px;
		z-index: 30;
	}

	.search-field {
		margin-left: 21%;
		width: 8rem;
		display: flex;
		justify-content: space-between;
		position: relative;
		align-items: center;
	}
	a {
		text-decoration: none;
		color: inherit;
	}

	.search-results-parent,
	.result {
		position: relative;
		z-index: 10;
	}
	.category {
		position: relative;
		display: inline-block;
	}

	.search-results {
		position: absolute;
		top: 90%;
		/* left: 79%; */
		z-index: 0;
		list-style: none;
		margin: 0;
		// padding: 0.3rem 0rem 0rem 0rem;
		background-color: rgb(255, 255, 255);
		width: 100%;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	}
	.par {
		z-index: 10 !important;
		// position: absolute;
		// top: 50%;
	}
	.theUl {
		position: absolute;
		padding-top: 5rem;
		z-index: 1;
		top: 100%;
		left: -15%;
		list-style: none;
		margin: 0;
		padding: 0;
		background-color: rgb(255, 255, 255);
		width: 7rem;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	}
	.result-items:hover,
	.listI:hover {
		z-index: 0;
		background-color: rgba(68, 67, 67, 0.2);
		width: calc(100% - 1rem);
	}
	.result-items,
	.listI {
		font-family: "Mukta Malar", sans-serif;
		font-size: 20px;
		transition: 0.8s;
		text-align: left;
		padding: 0.9rem 0.5rem;
		width: calc(100% - 1rem);
	}
	.underlined {
		text-decoration: underline;
		text-decoration-color: transparent;
		transition: 0.6s;
	}
	.underlined:hover {
		text-decoration-color: black;
	}
	.expand:hover {
		transform: scale(1.2);
	}
</style>
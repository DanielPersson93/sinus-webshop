<template>
	<div class="home">
		<div class="linksandshit">
			<router-link to="/checkout">CHECK OUT DANIELS COOL CHECKOUT</router-link
			><br />
			<button @click="getSkate">Skate</button>
			<button @click="getApparel">Apparel</button><br />
			<button @click="getProductCategory('cap')">Caps</button>
			<button @click="getProductCategory('hoodie')">Hoodies</button>
			<button @click="getProductCategory('tshirt')">T-shirts</button>
			<button @click="getProductCategory('socks')">Socks</button>
			<button @click="getProductCategory('totebag')">Bags</button>
			<button @click="getProductCategory('skateboard')">Skateboards</button>
			<button @click="getProductCategory('wheel')">Wheels</button><br />
			<router-link to="/profile/"> <button>PROFILE</button></router-link>
			<button @click="registerUser">Register User</button>
			<button @click="loginUser">Login</button>
			<button @click="placeOrder">Make an Order/checkout</button>
			<button @click="getOrder">Get Order</button><br />
		</div>
		<article class="grid-wrap">
			<article class="grid-full-width">
				<img src="@/assets/hero.jpg" alt="" />
				<section class="hero-left">
					<h1>Plastic 1</h1>
					<h2>now in plastic</h2>
				</section>
				<section class="hero-right">
					<h2>SHOP NOW</h2>
				</section>
			</article>

			<article class="picture-parent">
				<img src="@/assets/boardsbox.jpg" alt="" />
				<section class="picture-child">
					<h3>Boards</h3>
					<button @click="navigate('boards')">VIEW MORE</button>
				</section>
			</article>

			<article class="grid-span-2 picture-parent">
				<img src="@/assets/apparelbox.jpg" alt="" />

				<section class="picture-child">
					<h3>Apparel</h3>
					<button @click="navigate('apparel')">VIEW MORE</button>
				</section>
			</article>

			<article class="grid-span-2 picture-parent">
				<img src="@/assets/wheelbox.jpg" alt="" />
				<section class="picture-child">
					<h3>Wheels</h3>
					<button @click="navigate('wheels')">VIEW MORE</button>
				</section>
			</article>

			<article class="positioning picture-parent">
				<img src="@/assets/bagsbox.jpg" alt="" />
				<section class="picture-child">
					<h3>Bags</h3>
					<button @click="navigate('bags')">VIEW MORE</button>
				</section>
			</article>
		</article>
	</div>
</template>

<script>
	// import Actions from '@/store/action.types.js'
	export default {
		data() {
			return {
				cart: [],
				list: [],
				user: {
					email: "daniel@bananpaj.se",
					name: "Janne",
					password: "bänkpress",
					address: { street: "Greve by", zip: "42352", city: "Dervik" },
				},
				credentials: {
					email: "daniel@bananpaj.se",
					password: "bänkpress",
				},
				order: {
					items: [45, 57, 66],
				},
			};
		},
		methods: {
			getSkate() {
				this.$store.dispatch("fetchSkate");
			},
			getApparel() {
				this.$store.dispatch("fetchApparel");
			},
			getProductCategory(category) {
				this.$store.dispatch("getProductCategory", category);
			},
			registerUser() {
				this.$store.dispatch("registerUser", this.user);
			},
			loginUser() {
				this.$store.dispatch("loginUser", this.credentials);
			},
			placeOrder() {
				this.$store.dispatch("placeOrder");
			},
			getOrder() {
				this.$store.dispatch("getOrder");
			},
			navigate(query) {
				this.$router.push({
					name: "Products",
					query: { "": query },
				});
			},
		},
	};
</script>



<style lang="scss" scoped>
	.linksandshit {
		text-align: center;
	}

	.home {
		padding: 0 5rem;
	}
	img {
		object-fit: cover;
		width: 100%;
		height: 100%;
		position: relative;
		box-shadow: (0px 4px 4px rgba(0, 0, 0, 0.25));
		border-radius: 16px;
		z-index: 0;
	}

	.grid-wrap {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 5rem;
		width: 90%;
		margin: 5rem auto;
	}
	.grid-full-width {
		grid-column: span 3;
		color: white;
		position: relative;
		h2 {
			font-family: "Montserrat", sans-serif;
			// font-size: 64px;
			font-size: 4rem;
			margin: 0;
		}
		h1 {
			// font-size: 96px;
			font-size: 7rem;
			margin: 0;
		}
	}

	.picture-parent {
		position: relative;
		.picture-child {
			position: absolute;
			top: 2%;
			left: 5%;
			color: white;
		}
		h3 {
			font-size: 48px;
			font-family: "Montserrat", sans-serif;
			font-weight: 600;
		}
	}
	.hero-left {
		position: absolute;
		top: 28%;
		left: 15%;
		text-align: center;
	}
	.hero-right {
		position: absolute;
		top: 40%;
		right: 12%;
	}

	.grid-span-2 {
		grid-column: span 2;
	}
	.picture-in-picture {
		.mom {
			position: relative;
		}
		.imgbag {
			position: absolute;
			left: 50%;
		}
	}
article>*button{
margin-top: 2rem;
}	
</style>
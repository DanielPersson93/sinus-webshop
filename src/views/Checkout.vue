<template>
	<div class="checkout">
		<div class="your-products">
			<h4>YOUR PRODUCTS</h4>
			<div class="product" v-for="product in productsInCart" :key="product.id">
				<img
					:src="'http://localhost:5000/images/' + product.imgFile"
					:alt="product.title"
					width="65"
					height="72"
				/>
				<p>
					{{ product.title }} <br />
					{{ product.amount }} x {{ product.price }}
				</p>
			</div>
			<h5>Total price: ${{ totalprice }}</h5>
		</div>
		<div class="form">
			<form class="checkout-form">
				<div>
					<label for="contry">Country</label>
					<input type="text" id="country" name="contry" />
				</div>
				<div>
					<label for="email">E-mail</label>
					<input type="mail" id="email" name="email" v-model="userData.email" />
				</div>
				<div>
					<label for="fname">First Name</label>
					<input type="text" id="fname" name="fname" v-model="userData.name" />
				</div>
				<div>
					<label for="lname">Last Name</label>
					<input
						type="text"
						id="lname"
						name="lname"
						v-model="userData.lastname"
					/>
				</div>
				<div>
					<label for="address">Street</label>
					<input
						type="text"
						id="address"
						name="address"
						v-model="userData.address.street"
					/>
				</div>
				<div>
					<label for="mobile">Mobile no.</label>
					<input
						type="number"
						id="mobile"
						name="mobile"
						v-model="userData.mobile"
					/>
				</div>
				<div>
					<label for="city">City</label>
					<input
						type="text"
						id="city"
						name="city"
						v-model="userData.address.city"
						false-value="0"
						true-value="1"
					/>
				</div>
				<div>
					<label for="zipcode">Zip Code</label>
					<input
						type="text"
						id="zipcode"
						name="zipcode"
						v-model="userData.address.zip"
					/>
				</div>
			</form>
			<div class="card-and-button">
				<form class="card-info">
					<div>
						<label for="cardnumber">Card Number</label>
						<input type="number" id="cardnumber" name="card number" />
					</div>
					<div>
						<label for="MM/YY">MM/YY</label>
						<input type="text" id="MM/YY" name="Month and year" />
					</div>
					<div>
						<label for="CVC"> CVC</label>
						<input type="number" id="CVC" name="CVC" />
					</div>
				</form>
				<button @click="placeOrder">PLACE ORDER</button>
			</div>
		</div>
	</div>
</template>

<script>
	import { currentUser } from "@/api/index.js";
	export default {
		data() {
			return {
				order: [],
				userData: {
					email: "",
					name: "",
					address: {
						city: "",
						street: "",
						zip: "",
					},
				},
				inLogged: false,
			};
		},
		async beforeMount() {
			this.userData = await currentUser().then((res) => res.data);
			this.inLogged = true;
			console.log(this.userData);
		},
		methods: {
			placeOrder() {
				this.$store.dispatch("placeOrder");
			},
		},
		computed: {
			productsInCart() {
				return this.$store.getters.shoppingCart;
			},
			totalprice() {
				let total = 0;
				for (const product of this.$store.getters.shoppingCart) {
					total += product.amount * product.price;
				}
				return total;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.product {
		display: flex;
		align-items: center;
		margin-bottom: 40px;
		p {
			width: 253px;
		}
		img:first-of-type {
			object-fit: contain;
			margin-left: 40px;
			margin-right: 20px;
		}
		img:last-of-type {
			margin-right: 80px;
		}
	}
	.card-and-button {
		display: flex;
		margin-top: 40px;
		button {
			width: 172px;
			height: 71px;
			margin-left: 40px;
			align-self: center;
		}
	}
	label {
		height: 30%;
		font-size: 16px;
		line-height: 27px;
		letter-spacing: -0.02em;
	}
	input {
		text-transform: capitalize;
		width: calc(100% - 2.5rem);
		height: 70%;
		margin-top: -20px;
		border: none;
		padding-left: 1rem;
		font-size: 16px;
		line-height: 27px;
		letter-spacing: -0.02em;
	}
	input:focus {
		outline-color: transparent;
		outline-style: none;
	}
	.checkout {
		display: flex;
		justify-content: space-evenly;
		.checkout-form {
			width: 787px;
			height: 410px;
			grid-area: card-form;
			border: 5px solid black;
			border-radius: 15px;
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-template-areas:
				"country country"
				"email email"
				"firstname lastname"
				"adress mobile"
				"city zipcode";
			div {
				justify-content: space-between;
				display: flex;
				flex-direction: column;
				border: 1px solid black;

				//   border: 1px solid black;
				padding: 0.1rem 0 0 0.2rem;
				margin: 0;
			}
			div:nth-of-type(1) {
				grid-area: country;
			}
			div:nth-of-type(2) {
				grid-area: email;
			}
			div:nth-of-type(3) {
				grid-area: firstname;
			}
			div:nth-of-type(4) {
				grid-area: lastname;
			}
			div:nth-of-type(5) {
				grid-area: adress;
			}
			div:nth-of-type(6) {
				grid-area: mobile;
			}
			div:nth-of-type(7) {
				grid-area: city;
			}
			div:nth-of-type(8) {
				grid-area: zipcode;
			}
		}
		.card-info {
			margin-top: 0;
			width: 570px;
			height: 164px;
			border: 5px solid black;
			border-radius: 15px;
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(2, 1fr);
			grid-template-areas:
				"cardnumber cardnumber"
				"mmyy cvc ";
			div {
				padding: 0.1rem 0 0 0.2rem;
				display: flex;
				justify-content: space-between;
				flex-direction: column;
				border: 1px solid black;
			}
		}
		div:nth-of-type(1) {
			grid-area: cardnumber;
		}
		div:nth-of-type(2) {
			grid-area: mmyy;
		}
		div:nth-of-type(3) {
			grid-area: cvc;
		}
	}
</style>

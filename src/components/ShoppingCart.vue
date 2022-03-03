<template>
	<div class="wrapper">
		<div class="shoppingcart">
			<div>
				<h3>Your Cart</h3>
				<img src="@/assets/cross-icon.png" alt="" @click="$emit('closeCart')" />
			</div>
			<div class="product" v-for="product in products" :key="product.id">
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
				<img
					src="@/assets/cross-icon.png"
					alt=""
					width="25"
					height="25"
					@click="removeItemfromCart(product)"
				/>
			</div>
			<div>
				<h5>Checkout Total: ${{ totalprice }}</h5>
				<router-link to="/checkout">
					<button @click="$emit('closeCart')">RIDE TO CHECKOUT</button>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["products"],
		computed: {
			totalprice() {
				let total = 0;
				for (const product of this.products) {
					total += product.amount * product.price;
				}
				return total;
			},
		},
		methods: {
			removeItemfromCart(product) {
				this.$store.dispatch("removeFromCart", product);
			},
		},
	};
</script>

<style lang="scss" scoped>
	.wrapper {
		position: absolute;
		top: 40px;
		right: 40px;
		z-index: 11;
		background-color: white;
	}
	.shoppingcart {
		text-align: start;
		width: 483px;
		box-shadow: (0px 4px 4px rgba(0, 0, 0, 0.25));
		div:first-of-type {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 80px;
			h3 {
				margin-left: 40px;
			}
			img {
				margin-right: 40px;
			}
		}
		div:last-of-type {
			box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			h5 {
				margin-top: 8px;
			}
			button {
				margin-top: 20px;
				margin-bottom: 20px;
			}
		}
	}
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
</style>
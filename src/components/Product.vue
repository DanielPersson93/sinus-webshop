<template>
	<div class="card">
		<img
			src="@/assets/shoppingcart.svg"
			class="shopping-cart-icon"
			alt="shopping-cart-icon"
			@click="addItemToCart"
		/>
		<router-link :to="'singleproduct/' + product.id">
			<img
				class="image-fit"
				:src="'http://localhost:5000/images/' + product.imgFile"
				:alt="product.title"
			/>
		</router-link>
		<p>{{ product.title }} {{ product.category }}</p>
		<p class="price">$ {{ product.price }}</p>
	</div>
</template>

<script>
	export default {
		props: ["product"],
		methods: {
			addItemToCart() {
				this.$store.dispatch("addItemToCart", this.product);
			},
		},
	};
</script>

<style lang="scss">
	.image-fit {
		width: 269px;
		height: 292px;
		object-fit: contain;
	}
	.card {
		display: flex;
		flex-direction: column;
		width: 270px;
		height: 444px;
		text-align: center;

		.shopping-cart-icon {
			align-self: flex-end;
			width: 36px;
			height: 37px;

			&:hover {
				cursor: pointer;
				color: #881616 !important;
				box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.25);
			}
			&:active {
				color: #881616;
			}
		}

		p {
			font-size: 16px;
		}
		.price {
			color: #881616;
		}
	}
</style>

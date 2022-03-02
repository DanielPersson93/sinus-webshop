<template>
	<div class="single-product">
		<section>
			<div class="productview-top">
				<p>Home / Apparel / Hoodie</p>
			</div>
			<div class="divider"></div>
			<div class="product-container">
				<section class="img-wrapper">
					<img
						:src="'http://localhost:5000/images/' + product.imgFile"
						:alt="product.title"
						height="500"
						width="385"
					/>
				</section>
				<section class="information-wrapper">
					<h1>{{ product.title }}</h1>
					<h4>{{ product.category }}</h4>
					<p>{{ product.longDesc }}</p>
					<div class="bottom-wrapper">
						<h4>${{ product.price }}</h4>
						<button @click="addItemToCart">ADD TO CART</button>
					</div>
				</section>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		methods: {
			addItemToCart() {
				this.$store.dispatch("addItemToCart", this.product);
			},
		},
		computed: {
			products() {
				return this.$store.state.allProducts;
			},
			product() {
				return this.$store.state.allProducts.find(
					(allProducts) => allProducts.id == this.$route.params.id
				);
			},
		},
		mounted(){
			window.scrollTo(0,0)
		}
	};
</script>

<style lang="scss" scoped>
	.productview-top {
		display: flex;
		justify-content: space-between;
		margin: 0rem 0rem 1rem 0rem;
		height: 37px;
	}

	.product-container {
		display: flex;
		// margin-bottom: 10rem;
	}
	.single-product {
		display: flex;
		justify-content: center;
	}
	section{
		width: 828px;
		
	}
	.divider {
		border-bottom: solid black 2px;
		width: 100%;
		margin-bottom: 3rem;
	}
	.img-wrapper {
		img {
			object-fit: contain;
		}
	}
	.information-wrapper {
		margin-left: 5rem;
		h4,
		h5 {
			margin: 1rem 0rem;
		}
		p {
			width: 15rem;
		}
	}
	.bottom-wrapper {
		display: flex;
		align-items: center;
		h4 {
			color: #881616;
		}
	}
	button {
		margin-left: 3rem;
	}
</style>

<template>
	<div class="productsview">
		<section>
			<div class="productview-top">
				<p>Home / Apparel / Hoodie</p>
				<div class="filter">
					<img src="@/assets/filter icon.png" alt="filter-icon" />
					<p>Filters</p>
				</div>
			</div>
			<div class="divider"></div>
			<div class="product-grid">
				<Product
					v-for="product of currentProducts"
					:key="product.id"
					:product="product"
				/>
			</div>
		</section>
	</div>
</template>

<script>
	import Product from "../components/Product";
	export default {
		components: { Product },
		computed: {
			currentProducts() {
				return this.$store.getters.getSelectedCategory(
					this.$route.query.category
				);
			},
		},
		mounted(){
			window.scrollTo(0,0)
		}
	};
</script>
<style lang="scss" scoped>
	.productsview {
		display: flex;
		justify-content: center;
		
		.product-grid {
			display: grid;
			gap: 56px 192px;
			grid-template-columns: repeat(2, 1fr);
			margin: 0rem 3rem 0rem 3rem;
		}
	}
	.divider {
		border-bottom: solid black 2px;
		width: 100%;
		margin-bottom: 3rem;
	}
	.productview-top {
		display: flex;
		justify-content: space-between;
		margin: 0rem 0rem 1rem 0rem;
	}
	.filter {
		display: flex;
		img {
			padding-right: 1rem;
		}
	}
</style>

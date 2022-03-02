<template>
	<div class="home">
		<!-- <router-link to="/profile/"> <button>PROFILE</button></router-link> -->
		<article class="grid-wrap">
			<article class="grid-full-width">
				<img src="@/assets/hero.jpg" alt="" />
				<section class="hero-left">
					<h1>Plastic 1</h1>
					<h2>now in plastic</h2>
				</section>
				<section class="hero-right">
					<h3>SHOP NOW</h3>
				</section>
			</article>

			<article class="picture-parent">
				<img src="@/assets/boardsbox.jpg" alt="" />
				<section class="picture-child">
					<h3>Boards</h3>
					<router-link :to="{ name: 'ProductView', query: { category: 'skateboard' } }">
						<button class="white-border-button" @click="assignCategory('skateboard')">
							VIEW MORE
						</button>
					</router-link>
				</section>
			</article>

			<article class="grid-span-2 picture-parent">
				<img src="@/assets/apparelbox.jpg" alt="" />

				<section class="picture-child">
					<h3>T-shirts</h3>
					<router-link :to="{ name: 'ProductView', query: { category: 'tshirt' } }">
						<button class="white-border-button" @click="assignCategory('tshirt')">
							VIEW MORE
						</button>
					</router-link>
				</section>
			</article>

			<article class="grid-span-2 picture-parent">
				<img src="@/assets/wheelbox.jpg" alt="" />
				<section class="picture-child">
					<h3>Wheels</h3>
					<router-link :to="{ name: 'ProductView', query: { category: 'wheel' } }">
						<button class="white-border-button" @click="assignCategory('wheel')">
							VIEW MORE
						</button>
					</router-link>
				</section>
			</article>

			<article class="positioning bags__article">
				<img class="greta-totebag" src="@/assets/totebag.png" alt="" />
				<section class="bags__section">
					<h3>Bags</h3>
					<router-link :to="{ name: 'ProductView', query: { category: 'totebag' } }">
						<button class="white-border-button" @click="assignCategory('totebag')">
							VIEW MORE
						</button>
					</router-link>
				</section>
			</article>
		</article>
	</div>
</template>

<script>
	// import Actions from '@/store/action.types.js'
	export default {
		methods: {
			navigate(query) {
				this.$router.push({
					name: "ProductView",
					query: { category: query },
				});
			},
			assignCategory(category) {
				this.$store.dispatch("getProductCategory", category);
				console.log(category);
			},
		},
	};
</script>



<style lang="scss" scoped>
	h1,
	h2,
	h3 {
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		gap: 5rem;
		width: 90%;
		margin: 5rem auto;
	}
	.grid-full-width {
		grid-column: span 5;
		color: white;
		position: relative;
	}

	.picture-parent {
		grid-column: span 2;
		position: relative;
		.picture-child {
			position: absolute;
			top: 2%;
			left: 5%;
			color: white;
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
		grid-column: span 3;
	}
	.bags__article {
		grid-column: span 2;
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
		padding: 1rem 0 0 2rem;
		background-image: url("../assets/bagsbox.jpg");
		background-size: cover;
		border-radius: 16px;
		color: white;
		box-shadow: (0px 4px 4px rgba(0, 0, 0, 0.25));
		.bag__section {
			margin: 0 0 0 0;
		}
	}
	.greta-totebag {
		margin: 0 40px 0 0;
		height: 350px;
		width: 200px;
	}
	article > *button {
		margin-top: 2rem;
	}
</style>
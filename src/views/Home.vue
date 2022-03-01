<template>
	<div class="home">
		<router-link to="/profile/"> <button>PROFILE</button></router-link>
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
					<button @click="navigate('boards')">VIEW MORE</button>
				</section>
			</article>

			<article class="grid-span-2 picture-parent">
				<img src="@/assets/apparelbox.jpg" alt="" />

				<section class="picture-child">
					<h3>T-shirts</h3>
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
		methods: {
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
		grid-template-columns: 1fr 1fr 1fr;
		gap: 5rem;
		width: 90%;
		margin: 5rem auto;
	}
	.grid-full-width {
		grid-column: span 3;
		color: white;
		position: relative;
	}

	.picture-parent {
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
		grid-column: span 2;
	}

	article > *button {
		margin-top: 2rem;
	}
</style>
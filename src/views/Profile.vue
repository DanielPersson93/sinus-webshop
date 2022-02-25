<template>
	<div class="profile-wrapper">
		<h1>Profile</h1>
		<section class="profile-order">
			<div class="user-account">
				<h3>My Profile</h3>
				<article class="user-grid">
					<h5 class="name">{{ userData.name }}</h5>
					<h5 class="email">{{ userData.email }}</h5>
					<h5 class="street">{{ userData.address.street }}</h5>
					<h5 class="zip">{{ userData.address.zip }}</h5>
					<h5 class="city">{{ userData.address.city }}</h5>
					<h5 class="last-name">{{ userData.role }}</h5>
				</article>
			</div>
			<div class="order-history">
				<h3>ORDER HISTORY</h3>
				<li>
					<h5 v-for="order in orderHistory" :key="order.UserId">
						{{ order }}
					</h5>
				</li>
			</div>
		</section>
	</div>
</template>

<script>
	import { currentUser, getOrders } from "@/api/index.js";
	export default {
		data() {
			return {
				orderHistory: [],
				userData: {
					email: "",
					password: "",
					name: "",
					address: {
						city: "",
						street: "",
						zip: "",
					},
				},
			};
		},
		async beforeMount() {
			this.userData = await currentUser().then((res) => res.data);
			console.log(this.userData);

			this.orderHistory = await getOrders().then((res) => res.data);
		},
	};
</script>

<style lang="scss" scoped>
	.profile-wrapper {
		text-transform: uppercase;
		h1 {
			text-align: center;
			padding: 2rem;
		}
		h3 {
			margin: 1rem;
		}
		.profile-order {
			display: flex;
			flex-direction: row;
			justify-content: space-evenly;
			padding: 2rem;

			li {
				list-style: none;
			}

			.user-account {
				padding: 2rem;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				.user-grid {
					padding: 1rem 0;
					display: grid;
					grid-template-columns: repeat(2, 1fr);
					grid-template-rows: repeat(3, 1fr);
					grid-template-areas:
						"name lastname"
						" email street"
						"zip city";

					h5 {
						margin: 1rem 2rem;
					}
				}
			}
			.order-history {
				// background: rgba(194, 194, 194, 0.479);
				box-shadow: 0px 4px 15px 4px rgba(0, 0, 0, 0.25);
				padding: 2rem;
			}
		}
	}
</style>
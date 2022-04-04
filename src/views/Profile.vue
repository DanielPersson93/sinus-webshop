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
				<h3>Order History</h3>
				<ul class="order-history__ul">
					<li v-for="(order, index) in orderHistory" :key="order.id">
						<div>
							{{ order.id }}
              <!-- $1 Replace with openOverlay(order.id) -->
							<button @click="openOverlay(order, index)">Read more</button>
						</div>
						<div class="popup-content">
							<ul class="order__ul" v-if="order.open"> <!-- $1 Replace with activeOrderID == order.id -->
								<li><span> Id :</span> {{ order.id }}</li>
								<li><span>Status :</span> {{ order.status }}</li>
								<li><span>Shipping City :</span> {{ order.shippingCity }}</li>
								<li>
									<span>Shipping Street :</span> {{ order.shippingStreet }}
								</li>
								<li><span>Shipping Zip :</span> {{ order.shippingZip }}</li>
								<ul
									class="order-items__ul"
									v-for="item of order.items"
									:key="item.id"
								>
									<li><span>Price :</span> {{ item.price }}</li>
									<li><span>Amount:</span> {{ item.amount }}</li>
									<li><span>Item Id :</span> {{ item.id }}</li>
									<li><span>Product Id :</span> {{ item.ProductId }}</li>
								</ul>
							</ul>
						</div>
					</li>
				</ul>
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
      // $FEEDBACK: Don't mix async/await with .then/.catch
			this.userData = await currentUser().then((res) => res.data);

      // $QUESTION: Why is order history not in vuex?
			this.orderHistory = await getOrders().then((res) => res.data);
			this.orderHistory.forEach((order) => (order.open = false));
		},
		methods: {
      // $FEEDBACK: Replace with activeOrderID-data, see $1
			openOverlay(order, index) {
				order.open = !order.open;
				/** Updates object when item in array is changed */
				this.$set(this.orderHistory, index, order);
			},
		},
	};
</script>

<style lang="scss" scoped>
	.profile-wrapper {
		h1 {
			text-align: center;
			padding: 2rem;
		}
		h3 {
			margin: 1rem;
		}
		.profile-order {
			text-transform: capitalize;
			display: flex;
			flex-direction: row;
			justify-content: space-evenly;
			padding: 2rem;

			li {
				font-family: "Mukta Malar", sans-serif;
				font-style: normal;
				font-weight: normal;
				font-size: 20px;
				line-height: 27px;
				letter-spacing: -0.02em;
				list-style: none;
			}

			.user-account {
				padding: 2rem;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				.user-grid {
					width: 600px;
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
				box-shadow: 0px 4px 15px 4px rgba(0, 0, 0, 0.25);
				padding: 2rem;
				h3 {
					padding: 0 0 2rem 0;
				}
				.order-history__ul {
					div {
						display: flex;
						justify-content: space-evenly;
						margin: 0.5rem;
					}
					span {
						font-size: 20px;
						font-weight: bolder;
					}
					.popup-content {
						background: white;
						font-weight: 700;
					}
				}
			}
		}
	}
</style>
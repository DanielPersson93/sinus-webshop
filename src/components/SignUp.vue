<template>
	<section id="login-form">
		<h3>Register form</h3>

		<form action="#">
			<div class="d-flex">
				<div class="section-2">
					<div class="form-control">
						<label for="name">Name</label>
						<input type="text" id="name" v-model="registerFormData.name" />
					</div>
					<div class="form-control">
						<label for="street">Street</label>
						<input
							type="text"
							id="street"
							v-model="registerFormData.address.street"
						/>
					</div>
					<div class="zipCity">
						<div class="form-control">
							<label for="city">City</label>
							<input
								type="text"
								id="city"
								v-model="registerFormData.address.city"
							/>
						</div>
						<div class="form-control">
							<label for="zipcode">Zip Code</label>
							<input
								minlength="5"
								maxlength="5"
								type="text"
								id="zipcode"
								v-model="registerFormData.address.zip"
							/>
						</div>
					</div>
				</div>

				<div class="section-2">
					<div class="form-control">
						<label for="email">Email</label>
						<input type="email" id="email" v-model="registerFormData.email" />
					</div>
					<div class="form-control">
						<label for="password">Password</label>
						<input
							minlength="6"
							type="password"
							id="password"
							v-model="registerFormData.password"
						/>
					</div>
					<div class="form-control">
						<label for="repeat-password">Repeat password</label>
						<input
							minlength="6"
							type="password"
							id="repeat-password"
							v-model="repeatedPassword"
						/>
					</div>
				</div>
			</div>
			<button @click="signUp()">Sign up</button>
		</form>
	</section>
</template>

<script>
	import { registerUser } from "../api/index.js";
	export default {
		data() {
			return {
				repeatedPassword: "",
				/** Form that backend excepts */
				registerFormData: {
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
		methods: {
			signUp() {
				// Error handeling needed
				if (this.repeatedPassword !== this.registerFormData.password) {
					// Show an error here?
					return alert("Passwords does not match");
				}

				/** Check if we are missing data */
				if (
					!this.registerFormData.email ||
					!this.registerFormData.password ||
					!this.registerFormData.name ||
					!this.registerFormData.address.city ||
					!this.registerFormData.address.street ||
					!this.registerFormData.address.zip
				) {
					// Show an error here?
					return alert("Invalid input data");
				}

				registerUser(this.registerFormData)
					.then((registerRes) => {
						// Store token in local storage
						const token = registerRes.data.token;
						localStorage.setItem("authToken", token);

						// Store user details in local storage (?)
						const createdUser = registerRes.data.user;
						localStorage.setItem("user", JSON.stringify(createdUser));

						// skicka till profil sidan när du är klar
						//
						// this.$route.go('/profile');
					})
					.catch((err) => {
						console.log(err);
					});
			},
		},
	};
</script>

<style lang="scss" scoped>
	#login-form {
		width: 794px;
		height: 611px;
		z-index: 30;
		padding: 40px;
		background: white;
		border: 4px;
		right: 10px;
		position: absolute;
		top: 80px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.14);
		border-radius: 4px;
		margin: 0 auto;

		.d-flex {
			display: flex;
			justify-content: space-between;
			label {
				font-family: Mukta Malar;
				font-style: normal;
				font-weight: normal;
				font-size: 16px;
				line-height: 27px;
				letter-spacing: -0.02em;
				margin-top: 40px;
			}
			.zipCity {
				display: flex;
				justify-content: space-between;

				div:nth-of-type(1) {
					width: 25%;
				}
				div:nth-of-type(2) {
					width: 70%;
				}
			}
			.section-2 {
				width: 40%;
			}
		}

		.form-control {
			margin-bottom: 14px;

			input,
			label {
				display: block;
			}
			input {
				box-sizing: border-box;
				width: 100%;
				padding: 1rem;
				border: 1px solid #ccc;
				border-radius: 4px;
			}
			input:focus {
				outline-color: transparent;
				outline-style: none;
			}
		}
	}
</style>
<template>
	<section id="login-form">
		<span class="material-icons-outlined" @click="closeSignUpForm">
			close
		</span>
		<h3>Register form</h3>

		<form>
			<div class="d-flex">
				<div class="section-2">
					<div class="form-control">
						<label for="name">Name:</label>
						<input type="text" id="name" v-model="registerFormData.name" />
					</div>
					<div class="form-control">
						<label for="street">Street:</label>
						<input
							type="text"
							id="street"
							v-model="registerFormData.address.street"
						/>
					</div>
					<div class="zipCity">
						<div class="form-control">
							<label for="zipcode">Zip Code:</label>
							<input
								minlength="5"
								maxlength="5"
								type="text"
								id="zipcode"
								v-model="registerFormData.address.zip"
							/>
						</div>
						<div class="form-control">
							<label for="city">City:</label>
							<input
								type="text"
								id="city"
								v-model="registerFormData.address.city"
							/>
						</div>
					</div>
				</div>

				<div class="section-2">
					<div class="form-control">
						<label for="email">Email:</label>
						<input type="email" id="email" v-model="registerFormData.email" />
					</div>
					<div class="form-control">
						<label for="password">Password:</label>
						<input
							minlength="6"
							type="password"
							id="password"
							v-model="registerFormData.password"
						/>
					</div>
					<div class="form-control">
						<label for="repeat-password">Repeat password:</label>
						<input
							minlength="6"
							type="password"
							id="repeat-password"
							v-model="repeatedPassword"
						/>
					</div>
				</div>
			</div>
		</form>
		<button @click="signUp">Sign up</button>
	</section>
</template>

<script>
	import { registerUser } from "../api/index.js";
	export default {
		data() {
			return {
				isSignUpModalOpen: true,
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
			closeSignUpForm() {
				this.isSignUpModalOpen = !this.isSignUpModalOpen;
				this.$emit("closeSignUpForm");
			},
			signUp() {
				// Error handeling needed
				if (this.repeatedPassword !== this.registerFormData.password) {
					// Show an error here?
					return alert("Passwords does not match");
				}
				if (
					/** Check if we are missing data */
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
		z-index: 100;
		background: white;
		border: 2px solid black;
		right: 0;
		position: absolute;
		top: 0;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.14);
		border-radius: 7px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		padding: 0 0 40px 0;

		h3 {
			margin: 0 0 0 50px;
		}

		.material-icons-outlined {
			margin: 40px 40px 0 0;
			align-self: flex-end;
			font-size: 40px;
			cursor: pointer;
		}
		.material-icons-outlined:hover {
			transform: scale(1.2);
		}
		button {
			align-self: center;
		}

		.d-flex {
			.zipcode,
			.section-2 {
				width: 350px;
			}
			margin: 0 0 40px 0;
			display: flex;
			justify-content: space-evenly;
			label {
				font-weight: normal;
				font-size: 16px;
				line-height: 27px;
				letter-spacing: -0.02em;
				margin-top: 40px;
				padding: 0;
				margin-bottom: 0;
			}
			input {
				font-weight: normal;
				font-size: 16px;
				line-height: 27px;
				letter-spacing: -0.02em;
			}
			.zipCity {
				display: flex;
				justify-content: space-between;

				div:nth-of-type(1) {
					width: 30%;
				}
				div:nth-of-type(2) {
					width: 65%;
				}
			}
			.section-2 {
				width: 40%;
			}
		}

		.form-control {
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
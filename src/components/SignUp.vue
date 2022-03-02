<template>
	<section id="login-form">
		<span class="material-icons-outlined" @click="closeSignUpForm">
			close
		</span>
		<h2>Register form</h2>
		<form class="form-wrapper">
			<div class="left-side__section">
				<div class="form-article">
					<label for="name">Name:</label>
					<input type="text" id="name" v-model="registerFormData.name" />
				</div>
				<div class="form-article">
					<label for="street">Street:</label>
					<input
						type="text"
						id="street"
						v-model="registerFormData.address.street"
					/>
				</div>
				<div class="zipCity">
					<div class="form-article">
						<label for="zipcode">Zip Code:</label>
						<input
							minlength="5"
							maxlength="5"
							type="text"
							id="zipcode"
							v-model="registerFormData.address.zip"
						/>
					</div>
					<div class="form-article">
						<label for="city">City:</label>
						<input
							type="text"
							id="city"
							v-model="registerFormData.address.city"
						/>
					</div>
				</div>
			</div>

			<div class="right-side__section">
				<div class="form-article">
					<label for="email">Email:</label>
					<input type="email" id="email" v-model="registerFormData.email" />
				</div>
				<div class="form-article">
					<label for="password">Password:</label>
					<input
						minlength="6"
						type="password"
						id="password"
						v-model="registerFormData.password"
					/>
				</div>
				<div class="form-article">
					<label for="repeat-password">Repeat password:</label>
					<input
						minlength="6"
						type="password"
						id="repeat-password"
						v-model="repeatedPassword"
					/>
				</div>
			</div>
		</form>
		<button @click="signUp">SIGN UP</button>
	</section>
</template>

<script>
	// import { registerUser } from "../api/index.js";
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
				
				this.$store.dispatch("registerUser", this.registerFormData)
				this.$emit('sendUserData' , this.registerFormData)
				
			// 	registerUser(this.registerFormData)
			// 		.then((registerRes) => {
			// 			// Store token in local storage
			// 			const token = registerRes.data.token;
			// 			localStorage.setItem("authToken", token);

			// 			// Store user details in local storage (?)
			// 			const createdUser = registerRes.data.user;
			// 			localStorage.setItem("user", JSON.stringify(createdUser));
			// 		})
			// 		.catch((err) => {
			// 			console.log(err);
			// 		});
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

		h2 {
			margin: 0 0 0 40px;
		}

		.material-icons-outlined {
			margin: 40px 40px 0 0;
			align-self: flex-end;
			font-size: 40px;
			cursor: pointer;
			&:hover {
				transform: scale(1.2);
			}
		}
		button {
			align-self: center;
		}

		.form-wrapper {
			padding: 0 40px;
			margin: 0 0 40px 0;
			display: flex;
			justify-content: space-between;

			.left-side__section,
			.right-side__section {
				width: 317px;
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
			.form-article {
				input,
				label {
					display: block;
					font-weight: normal;
					font-size: 16px;
					line-height: 27px;
					letter-spacing: -0.02em;
				}
				label {
					margin-top: 30px;
					padding: 0;
					margin-bottom: 0;
				}
				input {
					box-sizing: border-box;
					width: 100%;
					padding: 1rem;
					border: 1px solid #ccc;
					border-radius: 4px;

					&:focus {
						outline-color: transparent;
						outline-style: none;
					}
				}
			}
		}
	}
</style>
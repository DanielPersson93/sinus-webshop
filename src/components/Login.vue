<template>
	<div class="login-wrap flex-col">
		<section class="header">
			<h2>Account</h2>
			<span class="material-icons-outlined" @click="$emit('closed')"> close </span>
		</section>
		<section class="sign-up flex-col">
			<p>Don't have an account yet?</p>
			<p>Sign up here!</p>
			<button @click="$emit('openForm')">SIGN UP</button>
		</section>
		<section class="inputs flex-col">
			<p>Email:</p>
			<input type="text" v-model="credentials.email" />
			<p>Password:</p>
			<input type="password" v-model="credentials.password" />
			<button @click="loginUser">LOGIN</button>
		</section>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				credentials: {
					email: "",
					password: "",
				},
			};
		},
		methods: {
			async loginUser() {
				await this.$store.dispatch("loginUser", this.credentials);
				await this.$store.dispatch("getUser");
			},
		},
	};
</script>

<style lang="scss" scoped>
.header {
	display: flex;
	margin: 40px 0px 36px 0px;
}
.flex-col {
	display: flex;
	flex-direction: column;
}
.material-icons-outlined {
	align-self: flex-end;
	margin: 0px 0px 35px 40px;
	font-size: 40px;
	cursor: pointer;
	&:hover {
		transform: scale(1.2);
	}
}
.login-wrap {
	align-items: center;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border: 2px solid black;
	border-radius: 7px;
	position: absolute;
	top: 20px;
	right: 20px;
	width: 397px;
	height: 651px;
	z-index: 11;
	background-color: white;
	.sign-up {
		text-align: center;
		button{
			margin-top: 20px;
		}
	}
	.inputs {
		button{
			margin-top: 40px;
		}
		p {
			margin-top: 2rem;
		}
	}
	button {
		align-self: center;
		cursor: pointer;
	}
	input {
		background: #F4F4F4;
		width: 317px;
		height: 58px;
		padding-left: 0.5rem;
		border-radius: 2.5px;
		border: 1px solid black;
	}
}
</style>
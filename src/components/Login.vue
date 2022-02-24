<template>
	<div class="login-wrap flex-col">
		<h1>Account</h1>
		<section class="sign-up flex-col">
			<p>Don't have an account yet? Sign up here!</p>
			<button>SIGN UP</button>
		</section>
		<section class="inputs flex-col">
			<p>Email:</p>
			<input type="text" />
			<p>Password:</p>
			<input type="text" />
			<button>LOGIN</button>
		</section>
	</div>
</template>

<script>
	export default {};
</script>

<style lang="scss" scoped>
	.flex-col {
		display: flex;
		//   justify-content: center;
		align-items: center;
		flex-direction: column;
		padding-top: 4rem;
	}
	.login-wrap {
		border: 2px solid black;
		position: fixed;
		top: 0;
		right: 0;
		width: 20vw;
		z-index: 9999;
		background-color: hotpink;
		height: 100vh;
		.sign-up {
			padding: 0rem 5rem;
			justify-content: space-between;
		}
		h1 {
			font-size: 52px;
		}
		p {
			font-size: 20px;
		}
		input {
			padding: 0.3rem 3rem;
			border-radius: 2.5px;
			border: 0.3px solid black;
		}
	}
</style>
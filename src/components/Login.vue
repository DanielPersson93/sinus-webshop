<template>
  <div class="login-wrap flex-col" v-if="!this.$store.state.token">
    <span class="material-icons-outlined" @click="closeSidebar"> close </span>
    <h1>Account</h1>
    <section class="sign-up flex-col">
      <p>Don't have an account yet?</p>
      <p>Sign up here!</p>
      <button>
        SIGN UP
      </button>
    </section>
    <section class="inputs flex-col">
      <p>Email:</p>
      <input type="text" v-model="email" />
      <p>Password:</p>
      <input type="password" v-model="password" />
      <button @click="loginUser">LOGIN</button>
    </section>
  </div>
  
</template>

<script>
export default {
  data() {
    return {

      email: "",
      password: "",
         
    };
  },
  methods: {
    closeSidebar() {
      this.$emit("closed");
    },
    loginUser() {
      let credentials = {
        email: this.email,
        password: this.password,
      }
      this.$store.dispatch("loginUser", credentials);
      
    },
        registerUser() {
      this.$store.dispatch("registerUser", this.user);
    },
  },
};
</script>

<style lang="scss" scoped>
.flex-col {
  display: flex;
  //   justify-content: center;
  flex-direction: column;
}

.login-wrap {
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-left: 2px solid black;
  position: fixed;
  top: 0;
  right: 0;
  width: 20vw;
  z-index: 9999;
  background-color: white;
  height: 100vh;
  padding-top: 1rem;

  .material-icons-outlined {
    align-self: flex-end;
    padding: 0rem 2rem 2rem 0rem;
    font-size: 40px;
    cursor: pointer;
  }

  .sign-up {
    padding: 0rem 5rem;
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
    margin-bottom: 2rem;
    text-align: center;
  }
  button {
    align-self: center;
    margin-top: 2.5rem;
    cursor: pointer;
  }
  h1 {
    font-size: 52px;
  }
  p {
    font-size: 18px;
  }
  .inputs {
    text-align: left;
    p {
      margin-top: 2rem;
    }
  }
  input {
    padding: 0.8rem 5rem;
    border-radius: 2.5px;
    border: 0.3px solid black;
  }
}
</style>
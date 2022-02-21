<template>
  <div id="app">
    <div id="nav">
      <Navigator />
    </div>
    <ShoppingCart />
    <router-view />
    <Footer class="footer" />
  </div>
</template>
<script>
import ShoppingCart from "@/components/ShoppingCart.vue"
import Navigator from "@/components/Navigator.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: { Navigator, Footer, ShoppingCart },
};
</script>

<style lang="scss">
.footer {
  margin-bottom: 0;
}
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  // background-color: red;
  h1 {
    font-family: "Montserrat", sans-serif;
  }
  p,
  a,
  button {
    font-family: "Mukta Malar", sans-serif;
  }
  button {
    width: 127px;
    height: 55px;
    background: #003827;
    border-radius: 4px;
    border: none;
    color: white;
  }
  button:hover {
    box-shadow: -1px 3px 6px rgba(0, 0, 0, 0.4);
    // box-shadow: inset 1px 1px 3px 1px #FFFFFF;
  }
  .whiteborderbutton {
    border: 3px solid #ffffff;
    box-shadow: -1px 3px 6px rgba(0, 0, 0, 0.4);
  }
}
</style>

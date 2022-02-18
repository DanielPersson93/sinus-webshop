<template>
  <div id="app">
    <div id="nav">
      <Navigator />
      <router-link to="/">Home</router-link> |
      <router-link to="/products">Products</router-link>

      <p>här är min gröna p tagg</p>
    </div>  <router-view />
    <Footer class="footer"/>
    </div>

</template>
<script>
import Navigator from "@/components/Navigator.vue"
import Footer from "@/components/Footer.vue"

export default {
  components: { Navigator, Footer},
};
</script>

<style lang="scss">
.footer{
margin-bottom: 0;
}
html,body{
    margin: 0;
  padding: 0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  h1 {
    font-family: "Montserrat", sans-serif;
  }
  p,
  a {
    font-family: "Mukta Malar", sans-serif;
  }
}


</style>

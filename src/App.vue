<template>
  <div id="app">
    <div id="nav">
      <Navigator />
      <router-link to="/">Home</router-link> |
      <router-link to="/products">Products</router-link>

      <p>här är min gröna p tagg</p>
      <ProductCard/>
      <button>VIEW MORE</button>
    </div>
    <router-view />
  </div>
</template>
<script>
import Navigator from "@/components/Navigator.vue";
import ProductCard from './components/ProductCard.vue';
export default {
  components: { Navigator, ProductCard },
};
</script>

<style lang="scss">
html,body{
    margin: 0;
  padding: 0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // background-color: red;
  h1 {
    font-family: "Montserrat", sans-serif;
  }
  p,
  a,
  button
   {
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
  button:hover{
    box-shadow: -1px 3px 6px rgba(0, 0, 0, 0.4);
    // box-shadow: inset 1px 1px 3px 1px #FFFFFF;
  }
  .whiteborderbutton{
    border: 3px solid #FFFFFF;
    box-shadow: -1px 3px 6px rgba(0, 0, 0, 0.4);
  }
}


</style>

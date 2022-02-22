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
@import './styles/styles.scss';
</style>

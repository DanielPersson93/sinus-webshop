<template>
  <div id="app">
    <div id="nav">
      <Navigator />
    </div>
    <router-view />
    <Footer class="footer" />
  </div>
</template>
<script>
import Navigator from "@/components/Navigator.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: { Navigator, Footer },
};
</script>


<style lang="scss">
@import './styles/styles.scss';
</style>

<template>
  <div class="single-product">
    <ProductCard />
  </div>
  <!-- <div class="card" v-if="product">
    <router-link to="/">Hem</router-link> -->
  <!-- <img :src="require(`../assets/${product.imgFile}`)" :alt="product.title" />
    <div class="card__text">
      <h2>{{ product.title }}</h2>
      <p>{{ product.id }}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aut, eius
        veritatis rerum ratione fuga temporibus deserunt beatae aliquam delectus
        et asperiores inventore debitis optio nihil animi dolorum cumque
        molestias.
      </p>
    </div>
  </div> -->
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
export default {
  components: { ProductCard },

  //     import * as API from "@/api/mock";
  // export default {
  //   props: ["item"],
  //   data() {
  //     return {
  //       productId: null,
  //       product: null,
  //       mockData: [],
  //     };
  //   },
  //   methods: {
  //     /** fetchProductById()
  //      *  Fetches the current product from the API
  //      */
  //     fetchProductById() {
  //       return this.mockData.find((product) => product.id === this.productId);
  //     },
  //   },
  //   async beforeMount() {
  //     /** 1. Get ID from Router URL */
  //     this.productId = Number(this.$route.params.id);

  //     /** 2. Fetch product by Id and set it to product */
  //     const mockData = await API.fetchProducts();
  //     this.mockData = mockData;
  //     this.product = this.fetchProductById();

  //     /** No product was found! Move to home page */
  //     // if (!this.product) {
  //     // this.$router.push("/");
  //     // }
  //   },
  // };
};
</script>

<style>
/* .card {
  display: flex;
  width: 800px;
  height: 800px;
  img {
  }} */
</style>

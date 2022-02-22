<template>
  <div class="single-product">
    <div class="divider"></div>
    <div class="product-container">
    <section class="img-wrapper">
      <img :src="'http://localhost:5000/images/' + product.imgFile" :alt="product.title">
    </section>
    <section class="information-wrapper">
      <h1>{{product.title}}</h1>
      <h4>{{product.category}}</h4>
      <p>{{product.longDesc}}</p>
      <div class="bottom-wrapper">
        <div class="rating-price">
          <h5>6/6</h5>
          <h4>${{product.price}}</h4>
        </div>
        <button>ADD TO CART</button>
      </div>
    </section>
    </div>
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
export default {
  computed: {
    products() {
      return this.$store.state.allProducts;
    },
    product() {
      return this.$store.state.allProducts.find((allProducts) => allProducts.id == this.$route.params.id);
    }
  }

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

<style lang="scss" scoped>

.product-container{
  display: flex;
  margin-bottom: 10rem;
}
.single-product{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.divider {
  margin-top: 5rem;
  border-bottom: solid black 2px;
  width: 60%;
}
.img-wrapper{
  margin-top: 4rem;
}
.information-wrapper{
  margin-top: 6rem;
  margin-left: 5rem;
    h4, h5{
      margin: 1rem 0rem;
    }
    p{
      width: 15rem;
    }
}
.bottom-wrapper{
  display: flex;
  align-items: center;
    h4{
      color: #881616;
    }
}
.rating-price{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
button{
  margin-left: 3rem;
}


/* .card {
  display: flex;
  width: 800px;
  height: 800px;
  img {
  }} */
</style>

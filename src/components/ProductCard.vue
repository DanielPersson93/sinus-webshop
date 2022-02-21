<template>
  <div class="product-card">
    <button @click="fetchMock">TRYCK</button>
    <div class="divider"></div>
    <section>
      <article class="product-image">
        <img
          v-if="bild"
          :src="require(`../assets/${mockData[0].imgFile}`)"
          alt=""
        />
      </article>
      <article class="product-info">
        <!-- <h1>{{ mockData }}</h1> -->
        <h1>Plastic-1</h1>
        <h2>Sinus Skateboards</h2>
        <p class="product-description">
          One of our most exclusive skateboards with a design made by the
          Spanish artist Mol Aré
        </p>
        <div class="rating-price-cta">
          <div>
            <p class="rating">6/6</p>
            <p class="price">$1314</p>
          </div>
          <button>ADD TO CART</button>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import * as API from "@/api/mock";
export default {
  data() {
    return {
      mockData: null,
      bild: false,
    };
  },
  methods: {
    async fetchMock() {
      const mockData = await API.fetchProducts();
      this.mockData = mockData;
      this.bild = true;
    },
  },
};
</script>

<style lang ="scss">
.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.divider {
  margin-top: 2rem;
  border-bottom: solid black 2px;
  width: 70%;
}
section {
  display: flex;
}
article {
  margin-top: 5rem;
}
img {
  width: 240px;
  height: 980px;
}
.product-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 5rem;

  h1 {
    margin: 0;
    font-size: 96px;
  }
  h2 {
    margin-top: 1.5rem;
    font-size: 32px;
  }
}
.product-description {
  font-size: 16px;
  width: 55%;
  text-align: start;
}
.rating {
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  text-align: start;
}
.price {
  margin: 0;
  font-size: 32px;
  color: #881616;
  font-weight: bold;
}
.rating-price-cta {
  display: flex;
  align-items: center;
}
button {
  margin-left: 3rem;
}
</style>
<template>
  <div class="card">
    <!-- <router-link :to="{ path: '/product/' + product.id }"> -->
      <img src="@/assets/shoppingcart.png" class="shopping-cart-icon" alt="shopping-cart-icon" @click="addItemToCart">
    <router-link :to="'singleproduct/' + product.id">
      <!-- <router-link to="/singleproduct"> -->
      <!-- <img
        :src="require(`../assets/${product.imgFile}`)"
        :alt="product.title"
      /> -->
      <img
        :src="'http://localhost:5000/images/' + product.imgFile"
        :alt="product.title"
        class="imageFit"
      />
    </router-link>
    <p>{{ product.title }} {{ product.category }}</p>
    <p class="price">$ {{ product.price }}</p>
    <div class="ratings__container">
      <!-- <p class="card__rating">
        {{ product.rating }}/6
        <img class="star__rating" src="../assets/star_black_24dp.svg" alt="" />
      </p> -->
    </div>
    <!-- <button @click="addItemToCart">Add to Cart</button> -->
  </div>
</template>

<script>
import Actions from '@/store/action.types'
export default {
  props: ["product"],
  methods: {
    addItemToCart(){
      this.$store.dispatch(Actions.ADD_TO_CART, this.product.id)
    }
  }
};

</script>

<style lang="scss">
.imageFit{
  height: 100%;
  width: 100%;
  object-fit: contain;
}
.card {
  display: flex;
  flex-direction: column;
  width: 270px;
  height: 444px;
  text-align: center;

  .shopping-cart-icon{
    align-self: flex-end;
    width: 36px;
    height: 37px;
  }

  img {
     width: 269px;
     height: 292px;
    // height: 50%;
    // width: 50%;
  }
  p{
    font-size: 16px;
  }
  .price{
    color: #881616;

  }

  // .card__title {
  //   font-family: Mukta Malar;
  //   font-style: normal;
  //   font-weight: 400;
  //   font-size: 24px;
  //   line-height: 27px;
  //   text-align: center;
  //   letter-spacing: -0.02em;
  //   margin: 0.2rem;
  // }
  // .card__price,
  // .card__rating {
  //   font-family: Mukta Malar;
  //   font-style: normal;
  //   font-weight: 400;
  //   font-size: 20px;
  //   line-height: 27px;
  //   text-align: center;
  //   letter-spacing: -0.02em;
  //   margin: 0.2rem;
  // }
  // .card__price {
  //   color: #881616;
  // }
  // .ratings__container {
  //   .star__rating {
  //     width: 16px;
  //     height: 16px;
  //   }
  // }
}
</style>

<template>
  <div class="wrapper">
    <div class="shoppingcart">
      <div>
        <h3>Your Cart</h3>
        <img src="@/assets/cross-icon.png" alt="">
      </div>
      <!-- hämta data från store cart.items det id getter som får ut product  -->
      <div class="product">
          <img :src="'http://localhost:5000/images/' + product.imgFile" :alt="product.title" width="65" height="72">
          <p>{{products.title}} <br>
          {{products.amount}} x {{products.amount*products.price}}</p>
        <img src="@/assets/cross-icon.png" alt="" width="25" height="25">
      </div>
      <div>
        <h5>Checkout Total: ${{(products.amount*products.price)*products}} </h5>
        <button>Ride to checkout
          <!-- <img src="@/assets/twitterlogo.svg" alt=""> -->
        </button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  //  IN NAVIGATOR
        // in template 
        // <ShoppingCart v-for="product of productsInCart"
        // :key="product.id"
        // :product="product" />
  // in script
  //  import Login from '@/components/Login.vue'
  // components:{Login, SignUp, ShoppingCart },
  //   computed: {
  //   productsInCart(){
  //     return this.$store.getters.shoppingCart
  //   }
  // },
}
</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    justify-content: center;
    // align-items: center;
}
.shoppingcart {
    text-align: start;
    width: 483px;
    box-shadow:(0px 4px 4px rgba(0, 0, 0, 0.25));
    div:first-of-type {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 80px;
      h3 {
        margin-left: 40px;
      }
      img {
        margin-right: 40px;
      }
    }
    div:last-of-type {
      box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h5 {
        margin-top: 8px;
      }
      button {
        margin-top: 20px;
        margin-bottom: 20px;
      }
    }
}
.product {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  p {
    width: 253px
  }
  img:first-of-type {
    margin-left: 40px;
    margin-right: 20px;
  }
  img:last-of-type {
    margin-right: 80px;
  }
}


</style>
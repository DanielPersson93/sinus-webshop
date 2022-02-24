<template>
  <div class="wrapper">
    <div class="shoppingcart">
      <div>
        <h3>Your Cart</h3>
        <img src="@/assets/cross-icon.png" alt="">
      </div>
      <!-- hämta data från store cart.items det id getter som får ut product  -->
      <div class="product">
          <img src="@/assets/facebooklogo.svg" alt="" width="65" height="72">
          <p>Sunus Hoodfe ASH grey <br>
          1 x 233</p>
        <img src="@/assets/cross-icon.png" alt="" width="25" height="25">
      </div>
      <div class="product">
        <img src="@/assets/twitterlogo.svg" alt="" width="65" height="72">
        <p>Sunus Hoodfe ASH grey <br>
        1 x 233</p>
        <img src="@/assets/cross-icon.png" alt="" width="25" height="25">
      </div>
      <div class="product">
        <img src="@/assets/instagramlogo.svg" alt="" width="65" height="72">
        <p>Sunus Hoodfe ASH grey <br>
        1 x 233</p>
        <img src="@/assets/cross-icon.png" alt="" width="25" height="25">
      </div>
      <div>
        <h5>Checkout Total: $743 </h5>
        <button>Ride to checkout
          <!-- <img src="@/assets/twitterlogo.svg" alt=""> -->
        </button>
        <p>{{productsInCart}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    computed: {
    productsInCart(){
      return this.$store.getters.shoppingCart
    }
  },
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
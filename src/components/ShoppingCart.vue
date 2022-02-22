<template>
  <div class="wrapper">
    <div class="shoppingcart">
      <h1>Your Cart</h1>
      <img src="@/assets/cross-icon.png" alt="">
      <!-- hämta data från mock api -->
      <div class="product">
        <!-- <div class="lådjävel"> -->
          <img src="@/assets/facebooklogo.svg" alt="" width="65" height="72">
          <p>Sunus Hoodfe green ferdea freafre dsaew <br>
          1 x 233</p>
        <!-- </div> -->
        <!-- <p>1 x $233</p> -->
        <img src="@/assets/cross-icon.png" alt="" width="25" height="25">
      </div>
    </div>
  </div>
</template>

<script>
export default {

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
}
.product {
  display: flex;
  align-items: center;
  p {
    padding: 0px 40px 0px 10px;
  }
  img:first-of-type {
    margin-left: 40px;
  }
  img:last-of-type {
    
  }
}


</style>
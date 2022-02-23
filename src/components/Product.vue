<<<<<<< HEAD
<template>
  <div class="card">
    <router-link :to="{ path: '/product/' + product.id }">
      <img
        :src="require(`../assets/${product.imgFile}`)"
        :alt="product.title"
      />
    </router-link>
    <h4 class="card__title">{{ product.title }}</h4>
    <h3>{{ product.id }}</h3>
    <p class="card__price">$ {{ product.price }}</p>
    <div class="ratings__container">
      <p class="card__rating">
        {{ product.rating }}/6
        <img class="star__rating" src="../assets/star_black_24dp.svg" alt="" />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style lang="scss">
.card {
  width: 270px;
  height: 444px;

  img {
    width: 269px;
    height: 291.57px;
  }

  .card__title {
    font-family: Mukta Malar;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 27px;
    text-align: center;
    letter-spacing: -0.02em;
    margin: 0.2rem;
  }
  .card__price,
  .card__rating {
    font-family: Mukta Malar;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    text-align: center;
    letter-spacing: -0.02em;
    margin: 0.2rem;
  }
  .card__price {
    color: #881616;
  }
  .ratings__container {
    .star__rating {
      width: 16px;
      height: 16px;
    }
  }
}
</style>
=======
<template>
  <div class="card">
    <!-- <router-link :to="{ path: '/product/' + product.id }"> -->
    <router-link :to="'singleproduct/' +product.id">
    <!-- <router-link to="/singleproduct"> -->
      <!-- <img
        :src="require(`../assets/${product.imgFile}`)"
        :alt="product.title"
      /> -->
      <img :src="'http://localhost:5000/images/' + product.imgFile" :alt="product.title">
    </router-link>
    <h4 class="card__title">{{ product.title }} {{ product.category }}</h4>
    <h3>{{ product.id }}</h3>
    <p class="card__price">$ {{ product.price }}</p>
    <div class="ratings__container">
      <!-- <p class="card__rating">
        {{ product.rating }}/6
        <img class="star__rating" src="../assets/star_black_24dp.svg" alt="" />
      </p> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],


};
</script>

<style lang="scss">
.card {
  width: 270px;
  height: 444px;

  img {
    width: 269px;
    height: 291.57px;
  }

  .card__title {
    font-family: Mukta Malar;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 27px;
    text-align: center;
    letter-spacing: -0.02em;
    margin: 0.2rem;
  }
  .card__price,
  .card__rating {
    font-family: Mukta Malar;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    text-align: center;
    letter-spacing: -0.02em;
    margin: 0.2rem;
  }
  .card__price {
    color: #881616;
  }
  .ratings__container {
    .star__rating {
      width: 16px;
      height: 16px;
    }
  }
}
</style>
>>>>>>> 0c9448fe172ba68658dc541c84215b325bfa9517

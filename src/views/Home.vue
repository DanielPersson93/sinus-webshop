<template>
  <div class="home">
<!-- <button @click="fetchProducts">Tryck</button> -->
<!-- <router-link to="/productview"><button @click="assignCategory('hoodie')">Hoodies</button></router-link> -->
<!-- <button @click="getApparel">Apparel</button> -->
    <article class="grid-wrap">
      <!-- <img
        :class="{
          'grid-span-2': index == 2 || index == 3,
          'grid-full-width': index == 0,
        }"
        v-for="(img, index) in list"
        :key="index"
        :src="require('@/assets/' + img)"
      /> -->

      <article class="grid-full-width">
        <img src="@/assets/hero.jpg" alt="" />
        <section class="hero-left">
          <h1>Plastic 1</h1>
          <h2>now in plastic</h2>
        </section>
        <section class="hero-right"><h2>SHOP NOW</h2></section>
      </article>

      <article class="picture-parent">
        <img src="@/assets/boardsbox.jpg" alt="" />
        <section class="picture-child">
          <h3>Boards</h3>
          <button @click="navigate('boards')">VIEW MORE</button>
        </section>
      </article>

      <article class="grid-span-2 picture-parent">
        <img src="@/assets/apparelbox.jpg" alt="" />

        <section class="picture-child">
          <h3>Apparel</h3>
          <button @click="navigate('apparel')">VIEW MORE</button>
        </section>
      </article>

      <article class="grid-span-2 picture-parent">
        <img src="@/assets/wheelbox.jpg" alt="" />
        <section class="picture-child">
          <h3>Wheels</h3>
          <button @click="navigate('wheels')">VIEW MORE</button>
        </section>
      </article>

      <article class="positioning picture-parent">
        <img src="@/assets/bagsbox.jpg" alt="" />
        <section class="picture-child">
          <h3>Bags</h3>
          <button @click="navigate('bags')">VIEW MORE</button>
        </section>
      </article>
    </article>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      list:[]
      };
  },


  methods: {
    fetchProducts(){
      this.$store.dispatch('fetchAllProducts')
    },
    assignCategory(category){
      this.$store.dispatch("getProductsAction", category)
      console.log(category)
    },
    getApparel(){
      this.$store.dispatch("fetchApparel")
    },
 
   navigate(query) {
      this.$router.push({
        name: "Products",
        query: { "": query },
      });
    },
 },

mounted(){
this.list = ['Hero.png', 
'boardbox.png',
'apparelbox.png',
'wheelbox.png' ,
'bagbox.png',
]
},
};
</script>

<style lang="scss" scoped>
.home {
  padding: 0 5rem;
}
img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: relative;
  box-shadow: (0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 16px;
  z-index: 0;
}

.grid-wrap {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5rem;
  width: 90%;
  margin: 5rem auto;
}
.grid-full-width {
  grid-column: span 3;
  color: white;
  h2 {
    font-family: "Montserrat", sans-serif;
    // font-size: 64px;
    font-size: 4rem;
    margin: 0;
  }
  h1 {
    // font-size: 96px;
    font-size: 7rem;
    margin: 0;
  }
}

.picture-parent {
  position: relative;
  .picture-child {
    position: absolute;
    top: -2%;
    left: 5%;
    color: white;
  }
  h3{
    font-size: 48px;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
  }

}
.hero-left {
  position: absolute;
  top: 28%;
  left: 15%;
  text-align: center;
}
.hero-right {
  position: absolute;
  top: 40%;
  right: 12%;
}

.grid-span-2 {
  grid-column: span 2;
}
.picture-in-picture {
  .mom {
    position: relative;
  }
  .imgbag {
    position: absolute;
    left: 50%;
  }
}
</style>
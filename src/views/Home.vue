<template>
  <div class="home">
    <div class="linksandshit">
      <router-link to="/checkout">CHECK OUT DANIELS COOL CHECKOUT</router-link><br>
      <button @click="getSkate">Skate</button>
      <button @click="getApparel">Apparel</button><br>
      <button @click="getProductCategory('cap')">Caps</button>
      <button @click="getProductCategory('hoodie')">Hoodies</button>
      <button @click="getProductCategory('tshirt')">T-shirts</button>
      <button @click="getProductCategory('socks')">Socks</button>
      <button @click="getProductCategory('totebag')">Bags</button>
      <button @click="getProductCategory('skateboard')">Skateboards</button>
      <button @click="getProductCategory('wheel')">Wheels</button><br>
      <button @click="registerUser">Register User</button>
      <button @click="loginUser">Login</button>
    </div>

    <article>
      <img
        :class="{
          'grid-span-2': index == 2 || index == 3,
          'grid-full-width': index == 0,
        }"
        v-for="(img, index) in list"
        :key="index"
        :src="require('@/assets/' + img)"
      />
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      user: {
        email: "daniel@bananpaj.se",
        name: "Janne",
        password: "bänkpress",
        address: 
          { street: "Greve by", 
          zip: "42352", 
          city: "Dervik" },
      },
      credentials: {
        email: "daniel@bananpaj.se",
        password: "bänkpress",
      }
    };
  },
  methods: {
    getSkate() {
      this.$store.dispatch("fetchSkate");
    },
    getApparel() {
      this.$store.dispatch("fetchApparel");
    },
    getProductCategory(category) {
      this.$store.dispatch("getProductCategory", category);
    },
    registerUser() {
      this.$store.dispatch("registerUser", this.user);
    },
    loginUser(){
      this.$store.dispatch("loginUser", this.credentials)
    }
  },
  mounted() {
    this.list = [
      "Hero.png",
      "boardbox.png",
      "apparelbox.png",
      "wheelbox.png",
      "bagbox.png",
    ];
  },
};
</script>



<style lang="scss" scoped>
.linksandshit {
  text-align: center;
}

.home {
  padding: 0 5rem;
}
img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
article {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5rem;
  width: 90%;
  margin: 5rem auto;
}
.grid-full-width {
  grid-column: span 3;
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

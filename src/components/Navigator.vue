<template>

 
  <div class="nav-wrap">
 <div class="abso"> <Login> </Login> </div>      

    <img src="@/assets/sinuslogo.svg" alt="" class="sinus-logo" />
    <section class="links">
      <router-link to="/">Home</router-link>

      <div
        class="category"
        @mouseover="hoverSkate = true"
        @mouseleave="hoverSkate = false"
      >
        <router-link to="/products" class="par"> Skates</router-link>

        <ul class="theUl" v-if="hoverSkate">
          <router-link to="/products">
            <li class="listI">Boards</li>
          </router-link>
          <router-link to="/products">
            <li class="listI">Wheels</li>
          </router-link>
        </ul>
      </div>

      <div
        class="category"
        @mouseover="hoverApparel = true"
        @mouseleave="hoverApparel = false"
      >
        <router-link to="/products" class="par"> Apparel</router-link>

        <ul class="theUl" v-if="hoverApparel">
          <router-link :to="{ name: 'Products', query: { category: clicked } }">
            <li class="listI" @click="setClicked">Hoodies</li>
          </router-link>

          <router-link :to="{ name: 'Products', query: { category: clicked } }">
            <li class="listI" @click="setClicked">T-shirts</li>
          </router-link>
          <router-link :to="{ name: 'Products', query: { category: clicked } }">
            <li class="listI" @click="setClicked">Socks</li>
          </router-link>
          <router-link to="/products">
            <li class="listI">Bags</li>
          </router-link>
          <router-link to="/products">
            <li class="listI">Headwear</li>
          </router-link>
        </ul>
      </div>
    </section>

    <section class="search-field">
      <span class="material-icons-outlined cursor" @click="search"> search </span>

      <section class="result">
        <input
          type="text"
          placeholder="Search.."
          @keyup="setQuery"
          @keyup.enter="search"
          v-model="searchInput"
          class="search-results-parent"
        />
        <ul class="search-results">
          <li
            v-for="(product, index) in $store.getters.resultsLimited"
            :key="index"
            class="result-items"
            @click="temp"
          >
            {{ product }}
          </li>
        </ul>
      </section>

      <span class="material-icons-outlined"> shopping_bag </span>
      <span class="material-icons-outlined"
      @click="openLogin"
      > person_outline </span>
      <!-- <p>{{getQuery}}</p> -->

    </section>    
  </div>
</template>

<script>
import Login from '@/components/Login.vue'
export default {
  components:{
    Login
  },
  data() {
    return {
      searchInput: "",
      hoverApparel: false,
      hoverSkate: false,
      clicked: "",
    };
  },
  methods: {
    setQuery() {
      this.$store.commit("setQuery", this.searchInput);
    },
    setClicked(e) {
      this.clicked = e.target.innerText.toLowerCase();
    },
    openLogin(){
console.log("HEJ")
    },

    search() {
      this.$router.push({
        name: "Products",
        query: { "": this.searchInput },
      });
    },
  },
  computed: {
    getQuery() {
      return this.$store.state.query;
    },
  },
};
</script>

<style scoped>
.material-icons-outlined {
  font-size: 1.8rem;
  color: black; 
   cursor: pointer;

}
/* .cursor{
} */
.nav-wrap {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 24px;
  display: flex;
  padding: 1rem 2.5rem;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  position: relative;
 
}

/* .apparel-ul , .skate-ul{
  display: none;
}
.apparel-link:hover{
  display:contents;
} */
.links {
  display: flex;
  justify-content: space-between;
  gap: 7rem;
}

input {
  padding: 0.4rem 1rem;
  border-radius: 10px;
  border: solid black 2.5px;
}

.search-field {
  margin-left: 20rem;
  width: 23rem;
  display: flex;
  justify-content: space-between;
  position: relative;
}
a {
  text-decoration: none;
  color: inherit;
}


.search-results-parent,
.category {
  position: relative;
  z-index: 1000;
}

.search-results {
  position: absolute;
  top: 10%;
  /* left: 79%; */
  z-index: 90000;
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: rgb(255, 255, 255);
  width: 13%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.par {
  z-index: 9000;
}

.theUl {
  position: absolute;
  padding-top: 5rem;
  top: 80%;
  left: 0%;
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: rgb(255, 255, 255);
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.result-items:hover,
.listI:hover {
  background-color: rgba(68, 67, 67, 0.2);
  width: 100%;
}
.result-items,
.listI {
  transition: 0.8s;
  text-align: left;
  padding-top: 0.8rem;
  width: inherit;
}
</style>

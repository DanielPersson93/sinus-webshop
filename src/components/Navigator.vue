<template>
  <div class="nav-wrap">
    <img src="@/assets/sinuslogo.svg" alt="" class="sinus-logo">
  <section class="links">
    <router-link to="/">Home</router-link>

<div class="category">
      <router-link to="/products" class="par"      
      @mouseover.native="hoverSkate = true"
      @mouseleave.native="hoverSkate = false">Skates</router-link>

      <ul class="theUl" v-if="hoverSkate">
        <li class="listI">
          Boards
        </li>
        <li class="listI">
          Wheels
        </li>
      </ul>
</div>

<div class="category">
      <router-link to="/products" class="par"
      @mouseover.native="hoverApparel = true"
      @mouseleave.native="hoverApparel = false"> Apparel</router-link>
      
      <ul class="theUl"
      v-if="hoverApparel">

        <li class="listI">Hoodies</li>
        <li class="listI">T-shirts</li>
        <li class="listI">Socks</li>
        <li class="listI">Bags</li>
        <li class="listI">Headwear</li>

      </ul>
</div>

  </section>

    <section class="search-field"> 
      <span class="material-icons-outlined">
      search
      </span>

      <section class="result">
      <input type="text" placeholder="Search.."
       @keyup="setQuery" 
       v-model="searchInput"
       class="search-results-parent"/> 
       <ul class="search-results">
      <li v-for="(product, index) in $store.getters.resultsLimited"
        :key="index"
        class="result-items">{{product}}
      </li>
      </ul>
      </section>


      <span class="material-icons-outlined ">
      shopping_bag
      </span>
      <span class="material-icons-outlined">
      person_outline
      </span>
      <!-- <p>{{getQuery}}</p> -->
  </section>

  </div>
</template>


<script>
export default {
  data(){return{
    searchInput:"",
    hoverApparel:false,
    hoverSkate:false,

  }},
  methods:{
    setQuery(){
      this.$store.commit('setQuery', this.searchInput)
    }
  },
  computed:{
    getQuery(){
      return this.$store.state.query
    },
  },
}
</script>

<style scoped>
.material-icons-outlined{
  font-size: 1.8rem;
  color: black;
}
.nav-wrap {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 24px;
  display: flex;
  padding: 1rem 2.5rem;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
}
/* .apparel-ul , .skate-ul{
  display: none;
}
.apparel-link:hover{
  display:contents;
} */
.links{
  display: flex;
  justify-content: space-between;
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
}
a {
  text-decoration: none;
  color: inherit;
  margin-left: 5rem;
}
.search-results-parent, .category{
  position: relative;
  z-index: 1000;
  }

  .search-results{
    position: absolute ;
    top: 10%;
    /* left: 79%; */
    list-style: none;
    margin: 0;
    padding: 0;
    background-color: rgb(255, 255, 255);
    width: 13%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .theUl{
    z-index: 500;
    position: absolute;
    top: 70%;
    left:30%;
    list-style: none;
    margin: 0;
    padding: 0;
    background-color: rgb(255, 255, 255);
    width: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  .result-items:hover{
    background-color: rgba(68, 67, 67, 0.2);
    width: 100%;
}
  .result-items, .listI {
    transition: 0.8s;
    text-align: left;
    padding-top: 0.8rem;
  }
</style>

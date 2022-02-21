<template>
  <div class="nav-wrap">
    <img src="@/assets/sinuslogo.svg" alt="" class="sinus-logo">
  <section class="links">
    <!-- <router-link to="/">Home</router-link>
    <router-link to="/products">Skates</router-link>
    <router-link to="/products">Apparel</router-link> -->


  </section>

    <section class="search-field"> 
      <span class="material-icons-outlined">
      search
      </span>

      <section class="result">
      <input type="text" placeholder="Search.."
       @keyup="setQuery" 
       v-model="searchInput"/> 
       <ul>
         <li v-for="(product, index) in $store.getters.resultsLimited" :key="index">{{product}}</li>
       </ul>
       </section>


      <span class="material-icons-outlined ">
      shopping_bag
      </span>
      <span class="material-icons-outlined">
      person_outline
      </span>
      <p>{{getQuery}}</p>
  </section>

  </div>
</template>


<script>
export default {
  data(){return{
    searchInput:""

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
</style>

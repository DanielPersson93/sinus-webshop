<template>
  <div class="nav-wrap">
    <img src="@/assets/sinuslogo.svg" alt="" class="sinus-logo">
  <section class="links">
    <router-link to="/">Home</router-link>
    <router-link to="/products">Skates</router-link>
    <router-link to="/products">Apparel</router-link>
  </section>

    <section class="search-field"> 
      <span class="material-icons-outlined">
      search
      </span>
      <input type="text" placeholder="Search.." /> 
      <span class="material-icons-outlined ">
      shopping_bag
      </span>
      <span class="material-icons-outlined">
      person_outline
      </span>
  </section>

  </div>
</template>
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

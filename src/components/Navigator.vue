<template>
  <div class="nav-wrap">
    <router-link to="/home">Home</router-link>
    <router-link to="/products">Skates</router-link>

    <router-link to="/products">Apparel</router-link>

    <section>Bag <input type="text" placeholder="Search.." /></section>
  </div>
</template>
<style scoped>
.nav-wrap {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 24px;
  display: flex;
  justify-content: space-around;
  padding: 2.5rem;
  padding-left: 30rem;
  padding-right: 30rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 600;
}
input {
  padding: 0.4rem 1rem;
  border-radius: 10px;
  border: solid black 2.5px;
}
section {
  margin-left: 20rem;
  display: flex;
  justify-content: space-between;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>

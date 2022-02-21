<template>
  <div class="category__container">
    <h4>Categories</h4>

    <ul class="heading__list">
      <li v-for="cat of categories" :key="cat.url">
        <router-link :to="{ path: '/productsview/' + cat.url }">
          <span class="cat__heading">
            {{ cat.name }}
          </span>
        </router-link>

        <span v-if="cat.subCategories" @click="cat.isOpen = !cat.isOpen">
          <span class="material-icons-outlined">
            {{ cat.isOpen ? "expand_less" : "expand_more" }}
          </span>
        </span>

        <ul class="underCat__heading" v-if="cat.isOpen">
          <li v-for="subCategory of cat.subCategories" :key="subCategory.url">
            <router-link :to="{ path: '/productsview/' + subCategory.url }">
              {{ subCategory.name }}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import * as API from "@/api/mock";
export default {
  data() {
    return {
      categories: API.CATEGORIES,
      categoryUrl: null,
    };
  },
  watch: {
    categoryUrl(url) {
      this.categoryUrl = url;
      this.openSelectedCategory();
      console.log(url);
    },
  },

  methods: {
    openSelectedCategory: function () {
      this.categoryUrl = this.$route.params.url;

      this.categories.forEach((category) => {
        /** If current category matches the one in the array - open it */
        category.isOpen = category.url === this.categoryUrl;

        /** If current category matches a sub category in the array - open the parent */
        category.subCategories.forEach((subCategory) => {
          category.isOpen =
            category.isOpen || subCategory.url === this.categoryUrl;
        });
      });
    },
  },

  beforeMount() {
    this.openSelectedCategory();
  },
};
</script>

<style lang="scss" scoped>
.category__container {
  width: 280px;
  padding: 1rem;
  h4 {
    text-align: left;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
  }
  .heading__list {
    margin: 0;
    padding: 0;
    list-style: none;
    text-align: left;
    .cat__heading {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      text-decoration-line: underline;
    }
    .underCat__heading {
      list-style: none;
      font-family: Mukta Malar;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 27px;
      letter-spacing: -0.02em;
      margin: 0 0 0 2rem;
      padding: 0;
    }
  }
}
</style>

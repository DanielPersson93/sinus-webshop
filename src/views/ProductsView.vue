<template>
  <div class="productsview">
    <div class="productsview__sidebar">
      <CategoryList />
    </div>
    <div class="productsview__card">
      <Product
        v-for="product of products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import * as API from "@/api/mock";
import CategoryList from "../shared/components/CategoryList";
import Product from "../shared/components/Product";
export default {
  components: { CategoryList, Product },
  data() {
    return {
      categoryUrl: null,
      categories: [],
      selectedCategory: null,
      mockData: [],
      products: [],
    };
  },

  async beforeMount() {
    /** Fetch categories from mock file*/
    this.categories = API.CATEGORIES;

    /** 1. Get category URL from Router URL */
    this.categoryUrl = this.$route.params.url;

    /** 2. Fetch category by Id and set it to category */
    const mockData = await API.fetchProducts();
    this.mockData = mockData;
    this.products = this.fetchProductsByCategoryUrl();
    this.getSelectedCategory();
  },

  watch: {
    /** When category param is changed take an action to fetch products */
    "$route.params.url": function (url) {
      this.categoryUrl = url;
      this.getSelectedCategory();
      this.products = this.fetchProductsByCategoryUrl();
    },
  },
  methods: {
    fetchProductsByCategoryUrl() {
      if (!this.categoryUrl) {
        return this.mockData;
      }
      /** Get all products that matches the category*/
      return this.mockData.filter((product) => {
        /** Check if current category exists in the categories array*/
        return product.categories.includes(this.categoryUrl);
      });
    },

    getSelectedCategory() {
      this.categories.forEach((category) => {
        /** If we find a match on the outer level - select the category */
        if (category.url === this.categoryUrl) {
          this.selectedCategory = category;
          console.log(this.selectedCategory);
        }

        /** If we don't find a match on the outer level - check for match in subCategories */
        const matchedSubCategory = category.subCategories.find(
          (subCategory) => subCategory.url === this.categoryUrl
        );
        if (matchedSubCategory) {
          this.selectedCategory = matchedSubCategory;
        }
      });

      /** No category was found! Move to home page */
      //   if (!this.selectedCategory) {
      //     // this.$router.push("/");
      //   }
    },
  },
};
</script>
<style lang="scss" scoped>
.productsview {
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;

  .sidebar {
    width: 213px;
  }
  .productsview__card {
    display: grid;
    gap: 56px 192px;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>

<template>
  <div class="productsview">
      <section class="productsview__sidebar">
        <CategoryList />
      </section>
      <section class="productsview__card">
        <div class="productview-top">
        <p>Home / Apparel / Hoodie</p>
        <div class="filter">
          <img src="@/assets/filter icon.png" alt="filter-icon">
          <p>Filters</p>
        </div>
        </div>
        <div class="divider"></div>
        <div class="product-grid">
        <Product
          v-for="product of currentProducts"
          :key="product.id"
          :product="product"
        />
        </div>
    </section>
  </div>
</template>

<script>
import * as API from "@/api/mock";
import CategoryList from "../components/CategoryList";
import Product from "../components/Product";
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
  computed: {
    currentProducts() {
      return this.$store.state.allProducts;
    },
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
  display: flex;
  justify-content: space-evenly;
  max-width: 1444px;

  .productsview__sidebar {
     width: 213px;
    //  margin-left: 5rem;
   }
  .product-grid {
    display: grid;
    gap: 56px 192px;
    grid-template-columns: repeat(2, 1fr);
    margin: 1rem 3rem 1rem 3rem;
  }
}
section{
  margin-top: 4rem;
}
.divider {
  border-bottom: solid black 2px;
  width: 100%;
  margin-bottom: 3rem;
}
.productview-top{
  display: flex;
  justify-content: space-between;
  margin: 1rem 0rem 1rem 0rem;
}
.filter{
  display: flex;
  img{
    padding-right: 1rem;
  }
}

</style>

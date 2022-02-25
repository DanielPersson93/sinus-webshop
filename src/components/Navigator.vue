<template>

	<div class="nav-wrap">
		<div class="abso">
        <ShoppingCart
        v-if="showCart"
        @closeCart="toggleCart"
        :products="productsInCart" />
			<Login
				v-if="loginField"
				@closed="loginField = false"
				@openForm="openForm"
			>
			</Login>
			<SignUp v-if="openSignUpForm" @closeSignUpForm="toggleOpenCloseForm" />
		</div>
		<img src="@/assets/sinuslogo.svg" alt="" class="sinus-logo" />
		<section class="links">
    <router-link to="/">Home</router-link>

    <div class="category" @mouseover="hoverSkate = true" @mouseleave="hoverSkate = false">
      <router-link :to="{ name: 'ProductView', query: { category: 'skate' } }">
        <h5 class="par" @click="getSkate">Skate</h5>
        </router-link>

        <ul class="theUl" v-if="hoverSkate">
          <router-link :to="{ name: 'ProductView', query: { category: 'skateboard' } }">
          <li class="listI" @click="assignCategory('skateboard')">Boards</li>
          </router-link>
          <router-link :to="{ name: 'ProductView', query: { category: 'wheel' } }">
          <li class="listI" @click="assignCategory('wheel')">Wheels</li>
          </router-link>
        </ul>
      </div>
      <div class="category" @mouseover="hoverApparel = true" @mouseleave="hoverApparel = false">

        <router-link :to="{ name: 'ProductView', query: { category: 'apparel' } }">
        <h5 class="par" @click="getApparel">Apparel</h5>
        </router-link>

        <ul class="theUl" v-if="hoverApparel">
          <router-link :to="{ name: 'ProductView', query: { category: 'hoodie' } }">
          <li class="listI" @click="assignCategory('hoodie')">Hoodies</li>
          </router-link>

          <router-link :to="{ name: 'ProductView', query: { category: 'tshirt' } }">
          <li class="listI" @click="assignCategory('tshirt')">T-shirts</li>
          </router-link>

          <router-link :to="{ name: 'ProductView', query: { category: 'socks' } }">
          <li class="listI" @click="assignCategory('socks')">Socks</li>
          </router-link>

          <router-link :to="{ name: 'ProductView', query: { category: 'totebag' } }">
          <li class="listI" @click="assignCategory('totebag')">Bags</li>
          </router-link>

          <router-link :to="{ name: 'ProductView', query: { category: 'cap' } }">
          <li class="listI" @click="assignCategory('cap')">Headwear</li>
          </router-link>
        </ul>
      </div>
    </section>


    <section class="search-field">
      <span class="material-icons-outlined expand" @click="search">
        search
      </span>

      <section class="result">

        <input
          type="text"
          placeholder="Search.."
          @keyup="setQuery"
          @keyup.enter="search"
          v-model="searchInput"
          class="search-results-parent"
        />
        <ul class="search-results" v-if="searchInput.length > 0">
          <li
            v-for="(product, index) in $store.getters.resultsLimited"

            :key="index"
            class="result-items"
            @click="temp">
            {{ product }}
          </li>
        </ul>
      </section>

      <span class="material-icons-outlined expand"> shopping_bag </span>
      <span class="material-icons-outlined expand" @click="openLogin">
        person_outline
      </span>
      <!-- <p>{{getQuery}}</p> -->
    </section>
  </div>

</template>

<script>
	import Login from "@/components/Login.vue";
	import SignUp from "@/components/SignUp.vue";
  import ShoppingCart from "@/components/ShoppingCart.vue"
	export default {
		components: {
			Login,
			SignUp,
      ShoppingCart,
		},
		data() {
			return {
				searchInput: "",
				hoverApparel: false,
				hoverSkate: false,
				clicked: "",
				openSignUpForm: false,
				loginField: false,
        showCart: false,
			};
		},
		methods: {
      toggleCart(){
        this.showCart = !this.showCart;
      },
			toggleOpenCloseForm() {
				this.openSignUpForm = !this.openSignUpForm;
			},
			openForm() {
				this.openSignUpForm = !this.openSignUpForm;
				this.loginField = !this.loginField;
			},
			setQuery() {
				this.$store.commit("setQuery", this.searchInput);
			},
			setClicked(e) {
				this.clicked = e.target.innerText.toLowerCase();
			},
			openLogin() {
				if (this.$store.state.token) {
					this.$router.push({ name: "ProductView" });
				} else this.loginField = true;
				console.log("HEJ");
			},
			temp() {
				console.log("hej");
			},
			search() {
				this.$router.push({
					name: "Products",
					query: { "": this.searchInput },
				});
			},

			assignCategory(category) {
				this.$store.dispatch("getProductCategory", category);
				console.log(category);
			},
          getSkate(){
      this.$store.dispatch("fetchSkate")
      this.$router.push("productview")
    },
    getApparel(){
      this.$store.dispatch("fetchApparel")
      this.$router.push("productview")
    },
	},
		computed: {
     productsInCart(){
       return this.$store.getters.shoppingCart
     },
			getQuery() {
				return this.$store.state.query;
			},
      },
	};
</script>

<style lang="scss" scoped>
.material-icons-outlined {
  font-size: 1.8rem;
  color: black;
  cursor: pointer;
}

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

.links {
  display: flex;
  justify-content: space-between;
  gap: 7rem;
}

input {
  padding: 0.4rem 1rem;
  border-radius: 10px;
  border: solid black 2.5px;
  z-index: 30;
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
.result ,
.category {
  position: relative;
  z-index: 1000;
}

.search-results {
  position: absolute;
  top: 90%;
  /* left: 79%; */
z-index: 0;
  list-style: none;
  margin: 0;
  padding: 0.3rem 0rem 0rem 0rem;
  background-color: rgb(255, 255, 255);
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.par {
  z-index: 9000;
}
.theUl {
  position: absolute;
  padding-top: 5rem;
  top: 80%;
  left: -15%;
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: rgb(255, 255, 255);
  width: 7rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.result-items:hover,
.listI:hover {
  z-index: 0;
  background-color: rgba(68, 67, 67, 0.2);
  width: 100%;
}
.result-items,
.listI {
  transition: 0.8s;
  text-align: left;
  padding-top: 0.9rem;
  width: inherit;
}
 .underlined{
 text-decoration: underline;
 text-decoration-color: transparent;
 transition: 0.6s;
}
.underlined:hover{
  text-decoration-color:black ;
}
.expand:active{
  transform: scale(1.2);
}
</style>

<template>
  <div class="nav-wrap">
   <img src="@/assets/sinuslogo.svg" alt="" class="sinus-logo" />
    <div class="abso">
      <ShoppingCart
        v-if="showCart"
        @closeCart="toggleCart"
        :products="productsInCart"
      />
      <Login
        v-if="loginField"
        @closed="loginField = false"
        @openForm="openForm"
		@showLogOut="showLogOut"
      />
      <SignUp v-if="openSignUpForm" @closeSignUpForm="toggleOpenCloseForm" @showLogOut="showLogOut"/>
    </div>
 
    <section class="nav-links">
      <router-link to="/" class="underlined"><h5>HOME</h5></router-link>

      <div
        class="category"
        @mouseover="hoverSkate = true"
        @mouseleave="hoverSkate = false"
      >
        <h5 class="underlined">SKATE</h5>
        <ul class="category-dropdown" v-if="hoverSkate">
          <router-link
            :to="{ name: 'ProductView', query: { category: 'skateboard' } }"
          >
            <li
              class="category-list-item"
              @click="assignCategory('skateboard')"
            >
              Boards
            </li>
          </router-link>
          <router-link
            :to="{ name: 'ProductView', query: { category: 'wheel' } }"
          >
            <li class="category-list-item" @click="assignCategory('wheel')">
              Wheels
            </li>
          </router-link>
        </ul>
      </div>
      <div
        class="category"
        @mouseover="hoverApparel = true"
        @mouseleave="hoverApparel = false"
      >
        <h5 class="underlined">APPAREL</h5>

        <ul class="category-dropdown" v-if="hoverApparel">
          <router-link
            :to="{ name: 'ProductView', query: { category: 'hoodie' } }"
          >
            <li class="category-list-item" @click="assignCategory('hoodie')">
              Hoodies
            </li>
          </router-link>

          <router-link
            :to="{ name: 'ProductView', query: { category: 'tshirt' } }"
          >
            <li class="category-list-item" @click="assignCategory('tshirt')">
              T-shirts
            </li>
          </router-link>

          <router-link
            :to="{ name: 'ProductView', query: { category: 'socks' } }"
          >
            <li class="category-list-item" @click="assignCategory('socks')">
              Socks
            </li>
          </router-link>

          <router-link
            :to="{ name: 'ProductView', query: { category: 'totebag' } }"
          >
            <li class="category-list-item" @click="assignCategory('totebag')">
              Bags
            </li>
          </router-link>

          <router-link
            :to="{ name: 'ProductView', query: { category: 'cap' } }"
          >
            <li class="category-list-item" @click="assignCategory('cap')">
              Headwear
            </li>
          </router-link>
        </ul>
      </div>
    </section>

    <section class="profile-cart-field">
      <!-- <img
				class="icon expand"
				src="@/assets/search-icon.svg"
				alt=""
				@click="search"
			/>

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
						@click="temp"
					>
						{{ product }}
					</li>
				</ul>
			</section> -->
			<img
				class="icon expand"
				src="@/assets/bag.svg"
				@click="toggleCart"
				alt=""
			/>
			<img
				class="icon expand profile-icon"
				:class="{redClass}"
				src="@/assets/profile.svg"
				alt=""
				@click="openLogin"
				
			/>
			<p>{{userData.name}}</p>
		</section>
			<div class="profile-iconAndSignOut">
				<form action="/" v-if="ifLoggedInShow">
				<input type=hidden > 
				<input type=submit value="Sign Out">
				</form> 
			</div>
	</div>
</template>

<script>
	import Login from "@/components/Login.vue";
	import SignUp from "@/components/SignUp.vue";
	import ShoppingCart from "@/components/ShoppingCart.vue";
	export default {
		components: {
			Login,
			SignUp,
			ShoppingCart,
		},
		data() {
			return {
				// searchInput: "",
				// userData: {
				// 	email: "",
				// 	password: "",
				// 	name: "",
				// 	address: {
				// 		city: "",
				// 		street: "",
				// 		zip: "",
				// 	},
				// },
				redClass:false,
				token: "",
				hoverApparel: false,
				hoverSkate: false,
				openSignUpForm: false,
				loginField: false,
				showCart: false,
				ifLoggedInShow:false,
			};
		},

  methods: {
	showLogOut(){
	this.ifLoggedInShow = true;
	this.redClass = true;
	},
    toggleCart() {
      this.showCart = !this.showCart;
    },
    toggleOpenCloseForm() {
      this.openSignUpForm = !this.openSignUpForm;
    },
    openForm() {
      this.openSignUpForm = !this.openSignUpForm;
      this.loginField = !this.loginField;
    },
	openLogin() {
		if (this.$store.state.token) {
			this.$router.push("/profile");
      } else this.loginField = true;
    },
    assignCategory(category) {
		this.$store.dispatch("getProductCategory", category);
    },
},
	computed: {
	productsInCart() {
		return this.$store.getters.shoppingCart;
    },
	userData(){
		return this.$store.state.user;
	}
},
};
</script>

<style lang="scss" scoped>
.icon {
  font-size: 1.8rem;
  color: black;
  cursor: pointer;
}

input{
	border: none;
	outline-color: transparent;
	outline-style: none;
	text-decoration: underline;
	background: #000000;
	color: white;
	padding: 10px;
	border-radius: 5px;
	&:hover{
		background: #881616;
		transform: scale(1.2);
	}
	
}
.redClass{
	filter: invert(15%) sepia(23%) saturate(7397%) hue-rotate(346deg) brightness(95%) contrast(97%);

}
.profile-icon{
	color: #881616 !important;
	display: inline-block;
	
}
.profile-iconAndSignOut{
	align-self: center;
	padding: 0 0 0 1rem;
	
}
.nav-wrap {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  padding: 1rem 2.5rem;
  align-items: center;
  justify-content: space-between;

  .nav-links {
    display: flex;
    gap: 9rem;
    margin: auto;
    align-items: center;
    .category {
      position: relative;
    }

    .category-dropdown {
      position: absolute;
      padding-top: 5rem;
      z-index: 1;
      list-style: none;
      margin: 0;
      padding: 0;
      background-color: rgb(255, 255, 255);
      width: 100%;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .category-list-item:hover {
      z-index: 0;
      background-color: rgba(68, 67, 67, 0.2);
      width: calc(100% - 1rem);
    }

    .category-list-item {
      font-family: "Mukta Malar", sans-serif;
      font-size: 20px;
      transition: 0.8s;
      text-align: left;
      padding: 0.9rem 0.5rem;
    }
  }
}
.profile-cart-field {
  width: 160px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
a {
  text-decoration: none;
  color: inherit;
}

.underlined {
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: 0.6s;
}
.underlined:hover {
  text-decoration-color: black;
}
.expand:hover {
  transform: scale(1.2);
}
</style>
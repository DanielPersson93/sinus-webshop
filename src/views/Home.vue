<template>
<div class="home">
      <div class="hero"  @click="getSingleProduct(16)">
        <aside>
          <h1>Plastic-1</h1>
          <h2>now in plastic</h2>
        </aside>
        <img src="../assets/sinus-skateboard-plastic 1.png" alt="">
        <h3>SHOP NOW</h3>
      </div>

      <div class="container">
        <div class="boards">
          <section>
            <h3>Boards</h3>
			<router-link :to="{ name: 'ProductView', query: { category: 'skateboard' } }">
            <button class="whiteborderbutton">VIEW MORE</button>
			</router-link>
          </section>
        </div>

        <div class="apparel">
          <section>
            <h3>Apparel</h3>
			<router-link :to="{ name: 'ProductView', query: { category: 'socks' } }">
            <button class="whiteborderbutton">VIEW MORE</button>
			</router-link>
          </section>
        </div>
      </div>

      <div class="container">
        <div class="wheels">
          <section>
            <h3>Wheels</h3>
			<router-link :to="{ name: 'ProductView', query: { category: 'wheel' } }">
            <button class="whiteborderbutton">VIEW MORE</button>
			</router-link>
          </section>
        </div>

        <div class="bags">
          <section>
            <h3>Bags</h3>
			<router-link :to="{ name: 'ProductView', query: { category: 'totebag' } }">
            <button class="whiteborderbutton">VIEW MORE</button>
			</router-link>
          </section>
          <img src="../assets/sinus-totebag-gretaedition 1.png" alt="">
        </div>
      </div>
  </div>
</template>

<script>
	export default {
		methods: {
			assignCategory(category) {
				this.$store.dispatch("getProductCategory", category);
			},
			getSingleProduct(productId){
				this.$router.push({
					name: 'SingleProduct', params: { id: productId }
					// path: "/singleproduct/" + productId,
				});
			}
		},
	};
</script>



<style lang="scss" scoped>
.container {
  display: flex;
}
.home {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: white;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.apparel, .bags, .boards, .wheels, .hero {
  display: flex;
  margin-top: 80px;  
  box-shadow:(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 16px;
  // margin-right: 80px;
    h3, button {
    margin-left: 16px;
    margin-top: 16px;
  }
}
button:hover {
	border: 2px solid #ffffff;
	cursor: pointer;
}
.hero {
  cursor: pointer;
  align-items: center;
  width: 1360px;
  height: 363px;
  background-image: url("../assets/jongsun-lee-F-pSZO_jeE8-unsplash.jpg");
  background-size: 80%;
  background-position-y: 55%;
  background-position-x: 55%;
  margin-top: 0px;
  aside { margin: -100px 120px 0px 80px;}
  img {margin-right: 200px;}

}
.boards, .bags {
  width: 493px;
  height: 418px;
}
.apparel, .wheels {
  width: 787px;
  height: 418px;
}
.apparel,.bags {margin-left: 80px;} 
// .wheels,.bags {margin-bottom: 80px;} 
.boards {
  background-image: url("../assets/niket-nigde-9N3rS-xLfkI-unsplash.jpg");
  background-size: 100%;
  background-position-y: 75%;
  // background-position-x: 50%;
}
.apparel {
  // background-image: url("../assets/priscilla-du-preez-WacbrU86JIw-unsplash.jpg");
  background-image: url("../assets/yasin-hosgor-7oHu7joUoUo-unsplash.jpg");
  background-size: 100%;
  // background-position-y: 10%;
  // background-position-x: 90%;
}
.wheels {
  // justify-content: flex-end;
  // section {margin-right: 40px;}
  background-image: url("../assets/liam-martens-Bh_hHUfPXJU-unsplash.jpg");
  background-size: 100%;
  background-position-y: 55%;
  // background-position-x: -30%;
}
.bags {
 img {margin-left: 15%;}
  background-image: url("../assets/mika-baumeister-Bv_PMxkprVQ-unsplash.jpg");
  background-size: 150%;
  background-position-x: 80%;
  background-position-y: 70%;
}
</style>
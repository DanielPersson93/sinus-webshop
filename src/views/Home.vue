<template>
  <div class="home">
<button @click="fetchProducts">Tryck</button>
<button @click="assignCategory('hoodie')">Hoodies</button>
<button @click="getApparel">Apparel</button>

<article>
<img  
:class="{ 'grid-span-2' :  index == 2 || index == 3   , 'grid-full-width': index==0 }"
v-for="(img,index) in list" :key="index" :src="require('@/assets/' + img)"
/>
</article>



  </div>
</template>

<script>
// @ is an alias to /src

export default {
  methods: {
    fetchProducts(){
      this.$store.dispatch('fetchAllProducts')
    },
    assignCategory(category){
      this.$store.dispatch("getProductsAction", category)
      console.log(category)
    },
    getApparel(){
      this.$store.dispatch("fetchApparel")
    }
  },

data(){return{
list:[]
  }

},
mounted(){
this.list = ['Hero.png', 
'boardbox.png',
'apparelbox.png',
'wheelbox.png' ,
'bagbox.png',
]
},
};
</script>

<style lang="scss" scoped>
.home{
padding: 0 5rem;

}
img{
  object-fit: cover;
  width: 100%;
  height: 100%;
}
article{
  display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 5rem;
    width: 90%;
    margin: 5rem auto;

}
.grid-full-width{
  grid-column: span 3;
}
.grid-span-2{
  grid-column: span 2;
}
.picture-in-picture{
  .mom{
    position: relative;
  }
  .imgbag{
    position: absolute;
    left: 50%;
  }
}
</style>
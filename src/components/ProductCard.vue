<template>
  <div class="product-card">
    <h1>Home</h1>
    <button @click ="fetchMock">TRYCK</button>
    <p>{{mockData}}</p>
   <!--  <img v-if="bild=true" :src="require(`${mockData[0].imgFile}`)" alt=""> -->
  </div>
</template>

<script>
import * as API from '@/api/mock'
export default {
    data(){return{
    mockData: [],
    bild: false
    }
    },
    methods:{
       async fetchMock(){
            const mockData = await API.fetchProducts()
            this.mockData = mockData
        }
    }
};
</script>

<style lang ="scss">
img{
    width: 300px;
    height: 200px;
}

</style>
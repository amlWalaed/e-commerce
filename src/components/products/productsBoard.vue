<template>
<div class="products-board rounded d-flex flex-wrap justify-content-center align-content-between g-2 p-3">
    <productCard v-for="item in getProductsByCategory[this.$route.params.name]" :key="item.id" :item='item'/>
</div>
</template>
<script>
import productCard from '@/components/global/productCard.vue'
import { mapGetters } from 'vuex';
export default{
   name:'products-board',
   components:{productCard},
   data(){
    return{
        
    }
   },
   computed:{
    ...mapGetters(['getProductsByCategory'])
   }
}
</script>
<style scoped>
.products-board{
    background-color: white;
}
.products-board .product-contanier{
    border: 1px solid var(--gray-color2);
    width: 32%;
    position: relative;
    margin: 0 5px;
}
.products .product-contanier img{
    width: 100%;
    height: 250px;
}
.fs-small{
    font-size: small;
}
.before-discount{
    margin-left: 25px;
}
</style>

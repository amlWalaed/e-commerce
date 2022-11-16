<template>
    <div class="container my-5">
        <div class="row">
            <div class="col-3">
                <sideBar :images="getproduct.images" />
            </div>
            <div class="col-9">
                <singleProduct :product="getproduct"/>
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
import sideBar from "./../components/productDetails/sidebar.vue";
import singleProduct from "./../components/productDetails/singleProduct.vue";
export default {
    name:'product-details',
    components:{sideBar ,singleProduct},
    computed:{
        ...mapGetters(['getproduct'])
    },
    mounted(){
        this.$store.dispatch('getSingleProduct' , this.$route.params.id)
    }
    
}
</script>
<style scoped>

</style>

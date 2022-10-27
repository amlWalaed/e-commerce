<template>
    <div class="products">
    <div class="container">
        <slider class="py-5">
            <h2 slot="overlay">الملابس</h2>
            <div class="carousel-inner h-50 rounded" slot="images">
                <div class="carousel-item active">
                    <img src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?cs=srgb&dl=pexels-pixabay-461198.jpg&fm=jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dessert-main-image-molten-cake-0fbd4f2.jpg" class="d-block w-100" alt="...">
                </div>
            </div>
        </slider>
        <div class="row">
            <div class="col-12 col-sm-3 mb-4">
                <filters/>
                <discount class="d-sm-none d-lg-block"/>
            </div>
            <div class="col-sm-12 col-md-9 mb-4">
                <productsBoard/>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import slider from '@/components/products/slider.vue'
import filters from '@/components/products/filters.vue'
import discount from '@/components/home/discount.vue'
import productsBoard from '@/components/products/productsBoard.vue'

export default{
  components: { slider , filters , discount , productsBoard },
    name:'products-view',
    data(){
        return{
            id:this.$route.params.id
        }
    },
}
</script>
<style scoped>
.products{
    background-color: var(--gray-color2);
}
</style>

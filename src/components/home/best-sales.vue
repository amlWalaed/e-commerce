<template>
  <div
    id="carouselExampleControls"
    class="carousel slide"
    data-bs-ride="carousel"
  >
  <div class="categories">
    <section class="d-flex justify-content-between">
      <header>Best Sales</header>
      <span class="dispaly-all">Show all</span>
    </section>
    <div class="categories-links">
      <router-link :to="{ name : 'categories', params:{ name : Category }}" v-for="Category in getCategories" :key="Category">{{Category}}</router-link>
    </div>
    
  </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
       <productCard v-for="item in getAllProducts" :key="item.id" :item='item' />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true">
        <i class="fa-solid fa-chevron-left fa-xl"></i>
      </span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true">
        <i class="fa-solid fa-chevron-right fa-xl"></i>
      </span>
    </button>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import productCard from './../global/productCard.vue'
export default {
  name: "best-sales",
  methods: {
   
  },
  components:{productCard},
  computed:{
    ...mapGetters(['getAllProducts' ,'getCategories'])
  }
};
</script>
<style scoped>
.slide{
  background-color: white;
  padding: 20px;
  border-radius: 10px;
}
.carousel-inner{
  margin-top: 25px;
}
.carousel-item.active {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}

.carousel-item .card{
  width: 30%;
  display: inline-flex;
}
.card img{
  height: 150px;
  padding: 10px;
  border-radius: 4px;
}
.card .card-title{
  display: flex;
  justify-content: space-between;
}
.card .card-title .store-name{
  color: var(--bg-color);
}
.price .price-before{
  padding-left: 10px;
  position: relative;
}
.price .price-before::after{
  content: "";
    width: 100%;
    position: absolute;
    bottom: 50%;
    background-color: var(--bs-secondary);
    height: 1px;
    left: 10px;
    transform: rotate(-17deg);
}
.categories header{
  font-weight: bold;
}
.categories-links{
  display: inline-flex;
  flex-direction: row;
  color: black;
}
.categories-links a{
  color: black;
  margin-left: 20px;
  position: relative;
}
.categories-links a.active , .categories-links a:hover{
  color:var(--bg-color);
}
.categories-links a.active , .categories-links a:hover::after{
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background-color: var(--bg-color);
  position: absolute;
  bottom: -2px;
}
.display-all{

}
.carousel-control-prev, .carousel-control-next{
  top: 50%;
  transform: translateY(-50%);
  background-color: white;
  color: black;
  opacity: 1;
  width: fit-content;
  height: fit-content;
  border: 2px solid var(--gray-color2);
  padding-top: 5px;
  
}
</style>
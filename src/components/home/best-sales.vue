<template>
  <div
    id="carouselExampleControls"
    class="carousel slide"
    data-bs-ride="carousel"
  >
  <div class="categories">
    <section class="d-flex justify-content-between">
      <header>الاكثر مبيعا</header>
      <span class="dispaly-all">عرض الكل</span>
    </section>
    <div class="categories-links">
      <router-link :to="{ name : 'products', params:{ id : depart.id }}" v-for="depart in getDepartments" :key="depart.id">{{depart.name}}</router-link>
    </div>
    
  </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="card" style="width: 18rem">
          <img src="https://wallpaperaccess.com/full/2489629.jpg" class="card-img-top rounded" alt="..." />
          <div class="card-body">
            <h5 class="card-title">
              <div class="product-name">
                كنزة صوفية
              </div>
              <div class="store-name">
                اسم المتجر
              </div>
            </h5>
            <p class="card-text product-description text-secondary">
             هذا النص مثال لنص يمكن استبداله 
            </p>
            <div class="price d-flex">
              <div class="price-before text-muted">
                100 ر.س
              </div>
              <div class="price-after">
                60 ر.س
              </div>
            </div>
          </div>
        </div>
        <div class="card" style="width: 18rem">
          <img src="https://wallpaperaccess.com/full/2489629.jpg" class="card-img-top rounded" alt="..." />
          <div class="card-body">
            <h5 class="card-title">
              <div class="product-name">
                كنزة صوفية
              </div>
              <div class="store-name">
                اسم المتجر
              </div>
            </h5>
            <p class="card-text product-description text-secondary">
             هذا النص مثال لنص يمكن استبداله 
            </p>
            <div class="price d-flex">
              <div class="price-before text-muted">
                100 ر.س
              </div>
              <div class="price-after">
                60 ر.س
              </div>
            </div>
          </div>
        </div>
        <div class="card" style="width: 18rem">
          <img src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?cs=srgb&dl=pexels-pixabay-461198.jpg&fm=jpg" class="card-img-top rounded" alt="..." />
          <div class="card-body">
            <h5 class="card-title">
              <div class="product-name">
                كنزة صوفية
              </div>
              <div class="store-name">
                اسم المتجر
              </div>
            </h5>
            <p class="card-text product-description text-secondary">
             هذا النص مثال لنص يمكن استبداله 
            </p>
            <div class="price d-flex">
              <div class="price-before text-muted">
                100 ر.س
              </div>
              <div class="price-after">
                60 ر.س
              </div>
            </div>
          </div>
        </div>
        <div class="card" style="width: 18rem">
          <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dessert-main-image-molten-cake-0fbd4f2.jpg" class="card-img-top rounded" alt="..." />
          <div class="card-body">
            <h5 class="card-title">
              <div class="product-name">
                كنزة صوفية
              </div>
              <div class="store-name">
                اسم المتجر
              </div>
            </h5>
            <p class="card-text product-description text-secondary">
             هذا النص مثال لنص يمكن استبداله 
            </p>
            <div class="price d-flex">
              <div class="price-before text-muted">
                100 ر.س
              </div>
              <div class="price-after">
                60 ر.س
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="card" style="width: 18rem">
          <img src="https://images.unsplash.com/photo-1628771065518-0d82f1938462?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1lZGljaW5lfGVufDB8fDB8fA%3D%3D&w=1000&q=80" class="card-img-top rounded" alt="..." />
          <div class="card-body">
            <h5 class="card-title">
              <div class="product-name">
                كنزة صوفية
              </div>
              <div class="store-name">
                اسم المتجر
              </div>
            </h5>
            <p class="card-text product-description text-secondary">
             هذا النص مثال لنص يمكن استبداله 
            </p>
            <div class="price d-flex">
              <div class="price-before text-muted">
                100 ر.س
              </div>
              <div class="price-after">
                60 ر.س
              </div>
            </div>
          </div>
        </div>
        <div class="card" style="width: 18rem">
          <img src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1206682746.jpg" class="card-img-top rounded" alt="..." />
          <div class="card-body">
            <h5 class="card-title">
              <div class="product-name">
                كنزة صوفية
              </div>
              <div class="store-name">
                اسم المتجر
              </div>
            </h5>
            <p class="card-text product-description text-secondary">
             هذا النص مثال لنص يمكن استبداله 
            </p>
            <div class="price d-flex">
              <div class="price-before text-muted">
                100 ر.س
              </div>
              <div class="price-after">
                60 ر.س
              </div>
            </div>
          </div>
        </div>
        <div class="card" style="width: 18rem">
          <img src="https://wallpaperaccess.com/full/2489629.jpg" class="card-img-top rounded" alt="..." />
          <div class="card-body">
            <h5 class="card-title">
              <div class="product-name">
                كنزة صوفية
              </div>
              <div class="store-name">
                اسم المتجر
              </div>
            </h5>
            <p class="card-text product-description text-secondary">
             هذا النص مثال لنص يمكن استبداله 
            </p>
            <div class="price d-flex">
              <div class="price-before text-muted">
                100 ر.س
              </div>
              <div class="price-after">
                60 ر.س
              </div>
            </div>
          </div>
        </div>
        <div class="card" style="width: 18rem">
          <img src="https://wallpaperaccess.com/full/2489629.jpg" class="card-img-top rounded" alt="..." />
          <div class="card-body">
            <h5 class="card-title">
              <div class="product-name">
                كنزة صوفية
              </div>
              <div class="store-name">
                اسم المتجر
              </div>
            </h5>
            <p class="card-text product-description text-secondary">
             هذا النص مثال لنص يمكن استبداله 
            </p>
            <div class="price d-flex">
              <div class="price-before text-muted">
                100 ر.س
              </div>
              <div class="price-after">
                60 ر.س
              </div>
            </div>
          </div>
        </div>
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
export default {
  name: "best-sales",
  methods: {
   
  },
  computed:{
    ...mapGetters(['getDepartments'])
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
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
      <router-link to="#">الكل</router-link>
      <router-link to="#">الملابس</router-link>
      <router-link to="#">الاطعمة</router-link>
      <router-link to="#">الحلويات</router-link>
      <router-link to="#">الادوية</router-link>
      <router-link to="#">الزيوت و الاعشاب</router-link>
      <router-link to="#">العطور </router-link>
      <router-link to="#">الاكسسورات</router-link>
    </div>
    
  </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="card" style="width: 18rem">
          <img src="https://wallpaperaccess.com/full/2489629.jpg" class="card-img-top rounded" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="card" style="width: 18rem">
          <img src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1206682746.jpg" class="card-img-top rounded" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="card" style="width: 18rem">
          <img src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?cs=srgb&dl=pexels-pixabay-461198.jpg&fm=jpg" class="card-img-top rounded" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="card" style="width: 18rem">
          <img src="https://wallpaperaccess.com/full/767033.jpg" class="card-img-top rounded" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="card" style="width: 18rem">
          <img src="https://images6.alphacoders.com/439/439410.jpg" class="card-img-top rounded" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="card" style="width: 18rem">
          <img src="https://wallpaperaccess.com/full/767033.jpg" class="card-img-top rounded" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="card" style="width: 18rem">
          <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dessert-main-image-molten-cake-0fbd4f2.jpg" class="card-img-top rounded" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="card" style="width: 18rem">
          <img src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top rounded" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
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
export default {
  name: "best-sales",
  methods: {
    slideFun() {
      let products = document.querySelectorAll(".slide .product");
      // let btnNext= document.querySelector('.slide .next');
      // let btnPre= document.querySelector('.slide .pervious');
      products.forEach((item) => {
        let itemDimension = item.getBoundingClientRect();
        let itemWidth = itemDimension.width;
        item.scrollLeft += itemWidth;
      });
      console.log(products);
    },
  },
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
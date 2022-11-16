<template>
  <div class="product-contanier rounded p-2 my-2 col-lg-4 col-12">
    <img :src="item.images[0]" class="rounded" />
    <div class="overlay justify-content-center align-items-center">
      <span class="icons">
        <span class="mx-1">
         <router-link :to="{ name : 'productDetails', params:{ id :item.id }}"><i class="fa-regular fa-eye ml-1"></i></router-link> 
        </span>
        <span class="mx-1">
          <i class="fa-regular fa-heart"></i>
        </span>
      </span>
    </div>
    <div class="product-details pb-5">
      <header class="d-flex justify-content-between">
        <span class="product-name">{{ item.title }}</span>
        <span class="product-store text-success">{{ item.brand }} </span>
      </header>
      <div class="product-description text-muted fs-small">
        {{ item.description }}
      </div>
      <div class="price d-flex justify-content-between px-2">
        <span class="before-discount text-muted d-inline-block"
          >price: {{ item.price }} $</span
        >
        <span class="after-discount" v-if="item.discountPercentage"
          >discount Percentage: {{ item.discountPercentage }} %
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "product-card",
  props: ["item"],
};
</script>
<style scoped>
.product-contanier {
  border: 1px solid var(--gray-color2);
  width: 33%;
  position: relative;
}
.product-contanier img {
  width: 100%;
  height: 250px;
}
.fs-small {
  font-size: small;
}
.price {
  position: absolute;
  bottom: 0;
  left: 0;
  flex-direction: column;
}
.product-contanier:hover {
  perspective: 480px;
  overflow: hidden;
}
.product-contanier:hover img {
  display: block;
  height: 100%;
  transition: 0.8s animation linear;
  animation: zoom-in 0.3s linear forwards;
}
.product-contanier .overlay {
  display: none;
}
.product-contanier .overlay a{
  color: var(--sec-color);
}
.product-contanier .overlay .icons {
  color: var(--sec-color);
  background-color: white;
}
.product-contanier:hover .overlay {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
@keyframes zoom-in {
  0% {
    transform: translateZ(50px);
  }
  100% {
    transform: translateZ(100px);
  }
}
.product-contanier:hover .product-details {
  display: none;
}

</style>

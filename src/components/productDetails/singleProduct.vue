<template>
  <div class="product p-3 d-flex flex-row justify-content-between">
    <div class="thumbnail">
      <img :src="product.thumbnail" />
    </div>
    <div class="product-info px-3">
      <header class="d-flex justify-content-between">
        <div class="product-name">{{ product.title }}</div>
        <div class="product-brand">{{ product.brand }}</div>
      </header>
      <div class="rating w-100 text-center">{{ product.rating }} / 5</div>
      <div class="d-flex flex-row justify-content-between">
        <div class="departments">
          <span class="text-muted">category:</span> {{ product.category }}
        </div>
        <div class="delivery-time">
          <span class="text-muted">delivery:</span> from 5 days to 10 days
        </div>
      </div>
      <div class="description py-3">{{product.description}}</div>
      <div class="discountPercentage py-2"> discount :{{product.discountPercentage}} %</div>
      <div class="price py-2">price : {{product.price}} $</div>
      <a class="btn btn-success w-100" @click="addToCart(product.id)">add to cart</a>
        
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  name: "single-product",
  props: ["product"],
  methods:{
    ...mapActions(["addToCart"])
  }
};
</script>
<style scoped>
.product {
  background-color: white;
  border-radius: 5px;
}
.product .thumbnail {
  border-radius: 5px;
  overflow: hidden;
  position: relative;
}
.product .thumbnail::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}
.product .thumbnail img {
  width: 100%;
  height: 100%;
}
.product .product-info {
  width: 50%;
}
.product .product-info header .product-brand {
  color: var(--sec-color);
}
</style>

<template>
   <div class="product-contanier rounded p-2 my-2 col-lg-4 col-12">
            <img :src="item.photo" class="rounded"/>
            <div class="product-details">
                <header class="d-flex justify-content-between">
                    <span class="product-name">{{item.name}}</span>
                    <span class="product-store text-success">{{item.storeName}} </span>
                </header>
                <div class="product-description text-muted fs-small">
                    {{item.description}}
                </div>
                <div class="price d-flex">
                    <span class="before-discount text-muted d-inline-block">{{item.price}} رس</span>
                    <span class="after-discount">{{item.discount}} ر.س</span>
                </div>
            </div>
        </div>
</template>
<script>
export default{
    name:'product-card',
    props:['item']
}
</script>
<style scoped>
.product-contanier{
    border: 1px solid var(--gray-color2);
    width: 33%;
}
.product-contanier img{
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

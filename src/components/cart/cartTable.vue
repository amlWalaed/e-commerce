<template>
    <div class="cart-table bg-light rounded px-3">
        <table class="table p-3 ">
            <thead>
                <tr>
                    <th scope="col text-center">product</th>
                    <th scope="col text-center">discountPercentage</th>
                    <th scope="col text-center">price</th>
                    <th scope="col text-center">amount</th>
                    <th scope="col text-center">discountedPrice</th>
                </tr>
            </thead>
        <tbody>
            <tr v-for="item in getCarts[0].products" :key="item.id">
                <td class="item-details d-flex justify-content-evenly align-items-center">
                    <router-link :to="{ name : 'productDetails', params:{ id :item.id }}">
                        <div class="details">
                            <div class="item-name fw-bold">{{item.title}}</div>
                        </div>
                    </router-link>
                </td>
                <td>
                   {{item.discountPercentage}} %
                </td>
                <td class="item-price">
                    {{ item.price }} $
                </td>
                <td class="item-num">
                    <span class="plus rounded px-2 mx-2">+</span>
                    {{ item.quantity }}
                    <span  class="munis rounded px-2 mx-2">-</span>
                </td>
                <td class="total">
                    {{ item.total}}
                </td>
            </tr>
            <tr v-if="getCarts.length===0">
                <td colspan="5">
                    <div class="no-vouchers text-center fw-bold w-100">
                        no purchases
                    </div>
                    <router-link to="/" class="btn btn-success text-white my-4">buy now</router-link>
                </td>
            </tr>
        </tbody>
        </table>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default{
    name:'cart-table',
    computed : {
    ...mapGetters(['getCarts']),
},
methods:{
}
}
</script>
<style scoped>
.bg-light{
    background-color: white !important;
}
th , td{
    text-align: center !important;
}
a{
    text-decoration: none !important;
    color: var(--black-color);
}
a:hover{
    color: var(--sec-color);
}
.item-property{
    margin-left: 10px;
    width: 75px;
    text-align: center;
}
.item-details img{
    width: 50px;
    height: 50px;

}
.item-num span{
    display: inline-block;
    color: var(--black-color);
    font-weight:bold ;
    cursor: pointer;
    background-color: var(--gray-color);

}
.item-remove{
    background-color: red;
    cursor: pointer;
} 
.item-remove:hover{
    filter: grayscale();
}
</style>
<template>
    <div class="cart-table bg-light rounded px-3">
        <table class="table p-3 ">
            <thead>
                <tr>
                    <th scope="col text-center">المنتج</th>
                    <th scope="col text-center">الخصائص</th>
                    <th scope="col text-center">السعر</th>
                    <th scope="col text-center">الكمية</th>
                    <th scope="col text-center">المجموع</th>
                </tr>
            </thead>
        <tbody>
            <tr v-for="item in getCartData" :key="item.id">
                <td class="item-details d-flex justify-content-evenly align-items-center">
                    <div class="item-remove text-white fw-bold rounded-circle px-2" @click="removeItem(item)">X</div>
                    <img :src="item.photo"/>
                    <router-link to="/">
                        <div class="details">
                            <div class="item-name fw-bold">{{item.name}}</div>
                        </div>
                    </router-link>
                </td>
                <td>
                    <span v-for="property in item.properties" :key="property" class="item-property btn btn-dark">{{ property }}</span>
                </td>
                <td class="item-price">
                    {{ item.price }} ر.س
                </td>
                <td class="item-num">
                    <span @click="increaseAmount(item)" class="plus rounded px-2 mx-2">+</span>
                    {{ item.amount }}
                    <span @click="decreaseAmount(item)" class="munis rounded px-2 mx-2">-</span>
                </td>
                <td class="total">
                    {{ item.amount * item.price}}
                </td>
            </tr>
            <tr v-if="getCartData.length===0">
                <td colspan="5">
                    <div class="no-vouchers text-center fw-bold w-100">
                        لا يوجد مشتريات
                    </div>
                    <router-link to="/" class="btn btn-success text-white my-4">التسوق</router-link>
                </td>
            </tr>
        </tbody>
        </table>
    </div>
</template>
<script>
import { mapGetters  , mapMutations } from 'vuex'
export default{
    name:'cart-table',
    computed : {
    ...mapGetters({getCartData: 'getCartData' , getTotal:'getTotal'}),
},
methods:{
    ...mapMutations(['increaseAmount' , 'decreaseAmount' , 'removeItem'])
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
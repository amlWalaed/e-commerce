<template>
<div class="cart bg-light pb-5">
    <div class="container h-75">
        <div class="row">
            <div class="col-12">
                <div class="cart-header py-5 text-center fs-6 display-2 fw-bold">
                    shopping cart
                </div>
            </div>
            <div class="row">
                <div class="col-lg-9 col-sm-12">
                    <cartTable/>
                </div>
                <div class="col-lg-3 col-sm-12">
                   <invoiceCard />
                </div>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import cartTable from '@/components/cart/cartTable' 
import invoiceCard from '@/components/cart/invoice' 
import { mapGetters } from 'vuex';

export default {
    name:'cart-view',
    components:{
        cartTable,
        invoiceCard,
    },
    computed:{
        ...mapGetters(['getCarts'])
    },
    mounted(){
        this.$store.dispatch('getUserCart')
    }
}
</script>


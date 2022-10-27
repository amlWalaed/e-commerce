<template>
<div class="cart bg-light pb-5">
    <div class="container h-75">
        <div class="row">
            <div class="col-12">
                <div class="cart-header py-5 text-center fs-6 display-2 fw-bold">
                    عربة التسوق
                </div>
            </div>
            <div class="row">
                <div class="col-lg-9 col-sm-12">
                    <cartTable/>
                </div>
                <div class="col-lg-3 col-sm-12">
                   <section class="overall-sec rounded">
                        <header class="bg-dark text-white py-3 text-center" >اجمالى عربة التسوق</header>
                        <div class="overall p-3">
                            <div class="net-overall d-flex justify-content-between my-3">
                                <div>اجمالى سعر المنتجات</div>
                                <div class="text-success"> {{ getTotal }} ر.س</div>
                            </div>
                            <div class="gross-overall d-flex justify-content-between my-3">
                                <div>اجمالى السعر</div>
                                <div class="text-success"> {{getTotal + 50}} ر.س</div>
                            </div>
                        </div>
                   </section>
                   <section class="discount-code my-3 p-3 rounded">
                    <form action="post" class="form-inline  mb-2">
                        <input type="text" placeholder="كود الخصم" class="form-control">
                        <input type="submit" class="btn btn-primary mb-2" value="تفعيل">
                    </form>
                   </section>
                   <section class="confirm-order">
                    <input type="submit" class="btn btn-confirm mb-2 w-100 rounded" value="اتمام الطلب">
                   </section>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import cartTable from '@/components/cart/cartTable' 
import { mapGetters } from 'vuex';

export default {
    name:'cart-view',
    components:{
        cartTable
    },
    computed:{
        ...mapGetters(['getTotal'])
    }
}
</script>
<style scoped>
.overall-sec{
    overflow: hidden;
}
.overall-sec .overall{
    background-color: white;
}
.discount-code{
    background-color: white;

}
.form-inline{
    position: relative;
}
.form-inline input:focus{
    box-shadow: none
}
.form-inline input[type='text']{
    background-color: var(--gray-color);
}
.form-inline input[type="submit"]{
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--sec-color);
}
.confirm-order {
    position: relative;
}
.confirm-order .btn-confirm{
    background-color: var(--sec-color);
    color: white;
}
</style>

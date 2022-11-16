<template>
  <div>
    <section class="overall-sec rounded">
      <header class="bg-dark text-white py-3 text-center">total of cart</header>
      <div class="overall p-3">
        <div class="all-product d-flex justify-content-between my-3">
          <div>total of purchases</div>
          <div class="text-success">{{ getCarts[0].totalProducts }} $</div>
        </div>
        <div class="total-quantity d-flex justify-content-between my-3">
          <div>Total Quantity</div>
          <div class="text-success">{{ getCarts[0].totalQuantity }} $</div>
        </div>
        <div class="gross-overall d-flex justify-content-between my-3">
          <div>total</div>
          <div class="text-success">{{  getCarts[0].total }} $</div>
        </div>
        <div class="discounted-total d-flex justify-content-between my-3">
          <div>Discounted Total</div>
          <div class="text-success">{{  getCarts[0].discountedTotal }} $</div>
        </div>

      </div>
    </section>
    <section class="discount-code my-3 p-3 rounded">
      <form action="post" class="form-inline mb-2">
        <input
          type="text"
          placeholder="code of discount"
          class="form-control"
        />
        <input type="submit" class="btn btn-primary mb-2" value="use" />
      </form>
    </section>
    <section class="confirm-order">
      <input
        type="submit"
        class="btn btn-confirm mb-2 w-100 rounded"
        value="confirm"
      />
    </section>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name: 'invoice-card',
    computed : {
    ...mapGetters(['getCarts']),
},
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
    right: 0;
    background-color: var(--sec-color);
    outline: none;
    border: none;
}
.confirm-order {
    position: relative;
}
.confirm-order .btn-confirm{
    background-color: var(--sec-color);
    color: white;
}
</style>

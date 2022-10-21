<template>
  <section class="landing">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-sm-12">
          <slider/>
        </div>
        <div class="col-lg-4 col-md-12 ">
          <categories/>
        </div>
      </div>
      <div class="row">
          <div class="col-lg-4 col-sm-12 my-sm-4">
            <discount/>
          </div>
          <div class="col-lg-4 col-sm-12 my-sm-4">
            <discount/>
          </div>
          <div class="col-lg-4 col-sm-12 my-sm-4">
            <discount/>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <bestSales/>
          </div>
        </div>
      </div>
  </section>
</template>

<script>
// @ is an alias to /src
import slider from '@/components/slider.vue'
import categories from '@/components/categories.vue'
import discount from '@/components/discount.vue'
import bestSales from '@/components/best-sales.vue'
export default {
  name: 'HomeView',
  components: {
    slider ,
    categories,
    discount,
    bestSales
  }
}
</script>
<style scoped>
section.landing{
  padding: 25px 0;
  background-color: #f2f2f2;
}
.row{
  margin: 20px 0;
}
</style>

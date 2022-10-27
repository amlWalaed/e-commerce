<template>
    <div class="filters rounded mb-3">
        <header class="text-center text-white py-2">
            <span><i class="fa-solid fa-arrow-down-wide-short"></i></span>
            <span class="head">فلتر حسب</span>
        </header>
        <form  method="get">
        <section class="p-3">
            <header class="d-flex justify-content-between" @click="showDepart = !showDepart">
                <span>الاقسام الفرعية</span>
                <span><i class="fa-solid fa-chevron-down"></i></span>
            </header>
            <div class="menu d-flex flex-wrap" v-if="showDepart">
                <div class="option my-2">
                    <input type="checkbox" name="depart" value="all" id="allDeparts">
                    <span class=""><i class="fa-solid fa-check"></i></span>
                    <label for="allDeparts">الكل</label>
                </div>
                <div class="option my-2" v-for="subPart in getDepartmentData.subDepartment" :key="subPart.id">
                    <input type="checkbox" name="depart" :value="subPart.nameEng" :id="subPart.nameEng">
                    <span class=""><i class="fa-solid fa-check"></i></span>
                    <label :for="subPart.nameEng">{{subPart.name}}</label>
                </div>
            </div>
        </section>
        <section class="p-3 ">
            <header class="d-flex justify-content-between" @click="showColors = !showColors">
                <span>الالوان</span>
                <span><i class="fa-solid fa-chevron-down"></i></span>
            </header>
            <div class="menu d-flex flex-wrap" v-if="showColors">
                <div class="option my-2">
                    <input type="checkbox" name="colors" value="all" id="allColors">
                    <span class=""><i class="fa-solid fa-check"></i></span>
                    <label for="allColors">الكل</label>
                </div>
                <div class="option my-2">
                    <input type="checkbox" name="colors" value="red" id="red">
                    <span class=""><i class="fa-solid fa-check"></i></span>
                    <label for="red">احمر</label>
                </div>
                <div class="option my-2">
                    <input type="checkbox" name="colors" value="green" id="green">
                    <span class=""><i class="fa-solid fa-check"></i></span>
                    <label for="green">اخضر</label>
                </div>
                <div class="option my-2">
                    <input type="checkbox" name="colors" value="yellow" id="yellow">
                    <span class=""><i class="fa-solid fa-check"></i></span>
                    <label for="yellow">اصفر</label>
                </div>
                <div class="option my-2">
                    <input type="checkbox" name="colors" value="blue" id="blue">
                    <span class=""><i class="fa-solid fa-check"></i></span>
                    <label for="blue">ازرق</label>
                </div>
                <div class="option my-2">
                    <input type="checkbox" name="colors" value="black" id="black">
                    <span class=""><i class="fa-solid fa-check"></i></span>
                    <label for="black">اسود</label>
                </div>
                <div class="option my-2">
                    <input type="checkbox" name="colors" value="white" id="white">
                    <span class=""><i class="fa-solid fa-check"></i></span>
                    <label for="white">ابيض</label>
                </div>
            </div>
        </section>
        <section class="p-3 ">
            <header class="d-flex justify-content-between" @click="showSize = !showSize">
                <span>المقاس</span>
                <span><i class="fa-solid fa-chevron-down"></i></span>
            </header>
            <div class="menu d-flex flex-wrap" v-if="showSize">
                <div class="option my-2">
                    <input type="checkbox" name="size" value="allSize" id="allSize">
                    <span class=""><i class="fa-solid fa-check"></i></span>
                    <label for="allSize">الكل</label>
                </div>
                <div class="option my-2">
                    <input type="checkbox" name="size" value="XXl" id="XXl">
                    <span class=""><i class="fa-solid fa-check"></i></span>
                    <label for="XXl">XXl</label>
                </div>
                <div class="option my-2">
                    <input type="checkbox" name="size" value="XL" id="xl">
                    <span class=""><i class="fa-solid fa-check"></i></span>
                    <label for="xl">Xl</label>
                </div>
                <div class="option my-2">
                    <input type="checkbox" name="size" value="MD" id="md">
                    <span class=""><i class="fa-solid fa-check"></i></span>
                    <label for="md">Xl</label>
                </div>
                <div class="option my-2">
                    <input type="checkbox" name="size" value="SM" id="sm">
                    <span class=""><i class="fa-solid fa-check"></i></span>
                    <label for="sm">Xl</label>
                </div>
            </div>
        </section>
        <section class="p-3">
            <header class="d-flex justify-content-between" @click="showPrice = !showPrice">
                <span>السعر</span>
                <span><i class="fa-solid fa-chevron-down"></i></span>
            </header>
            <div class="menu" v-if="showPrice">
                <input type="range" class="form-range" min="100" max="200000" step="100" id="customRange3" oninput="this.nextElementSibling.value =`${this.value}  ر.س`" name="maxCost">
                <output>0 ر.س</output>
            </div>
        </section>
        <div class="form-btns d-flex justify-content-evenly py-3">
            <input type="submit" value="تاكيد" class="btn rounded btn-success w-25 ml-3"/>
            <input type="reset" value="الغاء"  class="btn rounded btn-dark w-25"/>
        </div>
    </form>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name:'filter-component',
    computed:{
        ...mapGetters(['getDepartments']),
        getDepartmentData(){
         let depart = this.getDepartments.find(depart => depart.id == this.$route.params.id)
         return depart
        },
    },
    data(){
        return{
            showDepart:false,
            showColors:false,
            showSize:false,
            showPrice:false,
        }
    }
}
</script>
<style scoped>
.filters{
    overflow: hidden;
}
.filters > header{
    background-color: var(--sec-color);
}
.filters header span{
    margin-left: 10px;
}
.filters form{
    background-color: white;
}
.filters section{
    cursor: pointer;
    position: relative;
}
.filters section .menu .option {
    position: relative;
    width:100px;

}
.filters section:not(:first-child)::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    display: block;
    height: 0.5px;
    background-color: var(--gray-color);

}
.filters section .menu .option label{
    position: relative; 
    right: 30px;
}
.filters section .menu .option input{
    position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 25px;
  height: 25px;
  z-index: 99;
}
.filters section .menu .option span{
    position: absolute;
    top: 0;
    right: 0;
    height: 25px;
    width: 25px;
    background-color: white;
    border-radius: 4px;
    border: 1px solid var(--bg-color);
    color: white;
    text-align: center;
}
.filters section .menu .option input:checked + span{
    background-color: var(--bg-color);
}
input[type="range"]::-webkit-slider-runnable-track {
  background: #ccc;
  height: 0.5rem;
}

input[type="range"]::-moz-range-track {
    background: #ccc;
  height: 0.5rem;
}
input[type="range"]::-webkit-slider-thumb {
   -webkit-appearance: none; 
   appearance: none;
   background-color: var(--bg-color);   
}
output{
    color: var(--bg-color);
}

.btn-success{
   background-color: var(--sec-color);
}

</style>

<template>
    <aside class="categories">
        <header>
            Categories
        </header>
        <ul>
            <li v-for="category in getCategories " :key="category">
                <router-link :to="{ name : 'categories', params:{ name :category }}">
                    <span class="px-2">{{category}}</span>
                </router-link>
            </li>
        </ul>
    </aside>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name:"el-categories",
    computed:{
        ...mapGetters(['getCategories'])
    },
    mounted(){
       this.$store.dispatch('fetchData')
    }
}
</script>

<style scoped>
a{
    text-decoration: none;
    color: inherit;
}
.categories{
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    overflow: hidden;
    background-color: white;
}
.categories header{
    background-color: #45913c;
    color: white;
    text-align: center;
    padding: 10px 0;
}
.categories ul {
    display: flex;
    flex-direction: column;
    align-content: space-between;
    padding: 0;
}
.categories ul li {
    padding: 5px 0;
    position: relative;
    margin: 5px;
    width: 100%;
}
.categories ul li:not(:last-child)::after{
    content: "";
    display: block;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 5px;
    height: 1px;
    background-color: #f2f2f2;
}
.categories ul li img{
    width: 35px;
    height: 35px;
    margin:0 10px;
    border-radius: 4px;
}

</style>
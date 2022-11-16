<template>
  <div class="search-box col-lg-4 col-sm-2 d-none d-lg-block">
    <form @submit.prevent="fetchResults">
      <input
        type="text"
        placeholder="search about you want ..."
        v-model="query"
        class="input-search"
      />
      <button><i class="fas fa-search"></i></button>
    </form>
    <div class="result"  v-if="results.length > 0" ref="result-area">
        <div v-for="result in results" :key="result.id">
            <router-link :to="{ name : 'productDetails', params:{ id:result.id }}">{{result.title}}</router-link>
        </div>
    
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "search-bar",
  data() {
    return {
      query: "",
      results:[]
    };
  },
  methods: {
    async fetchResults() {
      await axios
        .get(`/products/search?q=${this.query}`)
        .then((results) => this.results = results.data.products);
        console.log(this.results)
    },
  },
};
</script>
<style scoped>
.search-box {
    position: relative;
}
.search-box form {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
}
.search-box input[type="text"] {
  border: none;
  padding: 10px;
  background-color: #e3e3e3;
  height: 100%;
  width: 93%;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
  width: 100%;
}
.search-box input[type="text"]:focus {
  border: 1p solid var(--sec-color);
  outline: none;
}
.search-box button {
  position: absolute;
  display: inline-flex;
  align-items: center;
  top: 0;
  right: 0;
  height: 100%;
  color: white;
  background-color: var(--bg-color);
  padding: 7px;
  cursor: pointer;
  border: none;
  outline: none;
}
.search-box .result {
  position: absolute;
  width: 100%;
  top: 57px;
  background-color: white;
  color: var(--bg-color);
  padding: 5px;
  z-index: 999;
  border: 1px solid var(--sec-color);
}
.search-box .result div{
    padding: 5px;
}
.search-box .result div a{
    text-decoration: none;
}
.search-box .result div a:hover{
    color: var(--bg-color);
}
.search-box .result div:not(:last-child)::after{
    content: "";
    width: 100%;
    height: 1px;
    background-color: var(--sec-color);
    display: block;
}
</style>

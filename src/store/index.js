import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    products: [],
    categories: [],
    productsByCategory: {},
    carts: {},
    user: null,
    productId: null,
    singleProduct: []
  },
  getters: {
    getCategories(state) {

      return state.categories
    },
    getProductsByCategory(state) {
      return state.productsByCategory;
    },
    getCarts(state) {
      return state.carts;
    },
    getUser(state) {
      return state.user;
    },
    getproduct(state) {
      return state.singleProduct;
    },
    getAllProducts(state){
      return state.products
    }
  },
  mutations: {
    setData(state, data) {
      state.products = data.products
      state.categories = state.products.map((product => {
        return product.category
      }))
      state.categories = Array.from(new Set(state.categories))
      let container = state.categories.reduce((key, value) => ({ ...key, [value]: [] }), {})
      for (let category of state.categories) {
        for (let product of state.products) {
          if (category == product.category) {
            container[category].push(product)
          }
        }
      }
      state.productsByCategory = container;
    },
    setUser(state, payload){
      if(JSON.parse(localStorage.getItem('user'))){
        state.user = JSON.parse(localStorage.getItem('user'))
      }
      else{
        localStorage.setItem('user' , JSON.stringify(payload))
        state.user = payload

      }
    },
    setCart(state, payload) {
      state.carts=payload
    },
    addCart(state, payload) {
      console.log(payload)
      if(state.carts[0]){
        let cart = state.carts[0]
        cart.products.push(payload.products[0])
        cart.total+=payload.total
        cart.discountedTotal+=payload.discountedTotal
        cart.total+=payload.total
        cart.totalProducts+=payload.totalProducts
        cart.totalQuantity+=payload.totalQuantity
        state.carts[0]=cart
      }
     
    },
    setSingleProduct(state, payload) {
      state.singleProduct = payload
    },

  },
  actions: {
    async fetchData({ commit }) {
      try {
        const data = await axios.get('products')
        commit('setData', data.data)
      }
      catch (error) {
        console.log(error)
      }
    },
    async getUserCart({ commit, state }) {
      if (state.user) {
        const data = await axios.get(`carts/user/${state.user.id}`)
        commit('setCart', data.data.carts)
      }
    },
    async getSingleProduct({ commit} , id) {
      if (id) {
        let singleProduct = await axios.get(`products/${id}`).then(res => res.data);
        commit('setSingleProduct', singleProduct)
      }
    },
    async addToCart({state , commit},productId){
      axios.post('https://dummyjson.com/carts/add',{
        userId: state.user.id,
        products: [
          {
            id: productId,
            quantity: 1,
          },
        ]
      }).then(res => commit('addCart' , res.data));
    }
  },
  modules: {
  }
})

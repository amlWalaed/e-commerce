import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    cart:[
      {
          id:"0",
          name:"بلوزة",
          price : 30,
          description:"هذا مثال لنص يمكن استبداله",
          photo:"https://i.pinimg.com/736x/0f/28/43/0f28434048bf67677972ab17632e5e71.jpg",
          properties:{
            color:"أسود",
            size:"xxL"
        },
        amount:1
      },
      {
          id:"1",
          name:"بنطلون",
          price : 40,
          description:"هذا مثال لنص يمكن استبداله",
          photo:"https://m.media-amazon.com/images/I/41K9LXpVIyL._AC_.jpg",
          properties:{
            color:"ابيض",
            size:"xL"
        },
        amount:2
      }
    ],
    total:0,
    products:[
      {
          id:"0",
          name:"لحمة",
          price : 130,
          discount:40,
          description:"هذا مثال لنص يمكن استبداله",
          photo:"https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
          properties:{
            },
          storeName:'باب الحارة'
      },
      {
        id:"0",
        name:"طماطم",
        price : 10,
        discount:40,
        description:"هذا مثال لنص يمكن استبداله",
        photo:"https://images.unsplash.com/photo-1607305387299-a3d9611cd469?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG9tYXRvfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        properties:{
        },
        storeName:'حموكشة'
      },
      {
        id:"0",
        name:"كيك",
        price : 50,
        discount:40,
        description:"هذا مثال لنص يمكن استبداله",
        photo:"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dessert-main-image-molten-cake-0fbd4f2.jpg",
        properties:{
        },
        storeName:'العز السورى'
      },
      {
        id:"0",
        name:"لحمة",
        price : 130,
        discount:40,
        description:"هذا مثال لنص يمكن استبداله",
        photo:"https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg",
        properties:{
          },
        storeName:'باب الحارة'
    },
    {
      id:"0",
      name:"طماطم",
      price : 10,
      discount:40,
      description:"هذا مثال لنص يمكن استبداله",
      photo:"https://images.unsplash.com/photo-1607305387299-a3d9611cd469?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG9tYXRvfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      properties:{
      },
      storeName:'حموكشة'
    },
    {
      id:"0",
      name:"كيك",
      price : 50,
      discount:40,
      description:"هذا مثال لنص يمكن استبداله",
      photo:"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dessert-main-image-molten-cake-0fbd4f2.jpg",
      properties:{
      },
      storeName:'العز السورى'
    }
    ],
    departments:[
      { id:0,
        name:'الملابس' ,
        photo:'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        subDepartment:[
          {
          id:0,
          name:"رجالى",
          nameEng: "men"
        },
        {
          id:1,
          name:"حريمى",
          nameEng : "women",
        },
        {
          id:2,
          name:"اطفال",
          nameEng: "childern"
        },
      ]
    },
      {
        id:1,
        name: 'الاطعمة' ,
        photo:'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?cs=srgb&dl=pexels-pixabay-461198.jpg&fm=jpg'
       },
      {
        id:2,
        name:'الحلويات',
        photo:'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dessert-main-image-molten-cake-0fbd4f2.jpg'
      },
      {
        id:3,
        name:'الادوية',
        photo:'https://images.unsplash.com/photo-1628771065518-0d82f1938462?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1lZGljaW5lfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
      } ,
      {
        id:4,
        name:'الزيوت و الاعشاب',
        photo:'https://hips.hearstapps.com/hmg-prod/images/gettyimages-1206682746.jpg'
      } , 
      {
        id:5,
        name:'العطور',
        photo:'https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg'
      } ,
      {
        id:6,
        name: 'الاكسسورات',
        photo:'https://images.unsplash.com/3/www.madebyvadim.com.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWNjZXNzb3JpZXN8ZW58MHx8MHx8&w=1000&q=80'
      }
    ]
  },
  getters: {
    getCartData(state){
      return state.cart
    },
    getTotal(state){
        if(state.cart.length===0){
          return state.total=0
        }else{
          let total = 0;
          console.log(state.cart[0])
          state.cart.forEach(item => {
          total = total + item.price * item.amount
          state.total = total
        })
          return state.total
        }
    },
    getDepartments(state){
      return state.departments
    },
    GetProducts(state){
      return state.products
    }
  },
  mutations: {
    increaseAmount(state , payload){
      state.cart[state.cart.indexOf(payload)].amount+=1

    },
    decreaseAmount(state , payload){
      if(state.cart[state.cart.indexOf(payload)].amount > 0){
        state.cart[state.cart.indexOf(payload)].amount-=1
      }
    },
    removeItem(state , payload){
      console.log(payload)
      console.log(state.cart)
      state.cart = state.cart.filter((ele) => ele.id !== payload.id)
    }
  },
  actions: {
  },
  modules: {
  }
})

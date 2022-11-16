<template>
  <div id="app" lang="ar">
    <nav>
      <div class="container">
        <div class="nav-content">
          <router-link to="/">
            <div class="logo">
              <img src="./assets/logo.png" alt="" />
            </div>
          </router-link>
          <search />
          <ul class="links">
            <li>
              <div class="icon">
                <i class="fa-regular fa-heart fa-2xl"></i>
                <span>1</span>
              </div>
            </li>
            <li>
              <div class="icon">
                <i class="fa-regular fa-bell fa-2xl"></i>
                <span>1</span>
              </div>
            </li>
            <li @click="showLogin = !showLogin">
              <div class="icon">
                <i class="fa-regular fa-user fa-2xl"></i>
              </div>
              <div>
                <span class="text-secondary"> welcome</span>
                <span v-if="!getUser">account</span>
                <span v-if="getUser">{{ getUser.username }}</span>
              </div>
              <ul class="dropdown register-card" v-if="showLogin & !getUser">
                <li>are you have account ?</li>
                <li><router-link class="btn btn-success" to='/join-us'>log in</router-link></li>
              </ul>
            </li>
            <li @click="showCart = !showCart">
              <div class="icon">
                <i class="fas fa-shopping-cart fa-2xl"></i>
                <span>{{ getCarts[0].products.length }}</span>
              </div>
              <div>
                <span class="text-secondary">Cart</span>
                <!-- <span>{{ getTotal }} ر.س</span> -->
              </div>
              <div class="cart-content" v-if="showCart" @click.stop.prevent>
                <ul>
                  <li v-for="item in getCarts[0].products" :key="item.id">
                    <div class="item-details">
                      <div class="item-name">
                        {{ item.title }} * {{ item.quantity }}
                      </div>
                      <div class="item-cost">{{ item.price }} ر.س</div>
                    </div>
                  </li>
                  <li v-show="getCarts.length === 0">
                    <div class="no-item mb-1">nothing in cart</div>
                  </li>
                </ul>
                <router-link to="#" class="btn">confirm request</router-link>
                <router-link to="/cart" class="btn">show cart</router-link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- start main  -->
    <main>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="links">
              <router-link to="/">Home</router-link>
              <router-link to="/about"> About Us</router-link>
              <router-link to="/join-us">join</router-link>
            </div>
          </div>
        </div>
      </div>
    </main>
    <!-- end main  -->
    <router-view></router-view>
    <footer>
      <div class="container">
        <div class="row">
          <div
            class="
              footer-content
              col-12
              my-5
              d-lg-flex
              justify-content-between justify-content-sm-center
            "
          >
            <div class="col-lg-2 col-md-6 col-sm-12">
              <div class="header">فخر</div>
              <ul class="d-inline-flex flex-column">
                <li>home</li>
                <li>departments</li>
                <li>Faghr</li>
                <li>join us</li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-6 col-sm-12">
              <div class="header">my account</div>
              <ul class="d-inline-flex flex-column">
                <li>my profile</li>
                <li>list of wishes</li>
                <li>my requests</li>
                <li>novices</li>
                <li>sign in / up</li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-6 col-sm-12">
              <div class="header">who we are</div>
              <ul class="d-inline-flex flex-column">
                <li>about platform</li>
                <li>contact us</li>
                <li>our values</li>
              </ul>
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="header">subscribe</div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
                magni temporibus sunt animi mollitia nemo quam, numquam quod
                officia accusantium veritatis voluptate invento
              </p>
              <div class="col-auto">
                <div class="input-group mb-2">
                  <input
                    type="text"
                    class="form-control"
                    id="inlineFormInputGroup"
                    placeholder="enter email"
                  />
                  <div class="input-group-prepend">
                    <div
                      class="input-group-text"
                      style="
                        color: white;
                        background-color: var(--sec-color);
                        margin-right: 5px;
                      "
                    >
                      follow us
                    </div>
                  </div>
                </div>
                <div class="header">follow us in social media</div>
                <div class="media">
                  <a><i class="fa-brands fa-facebook fa-2xl"></i></a>
                  <a><i class="fa-brands fa-square-twitter fa-2xl"></i></a>
                  <a><i class="fa-brands fa-linkedin fa-2xl"></i></a>
                  <a><i class="fa-brands fa-google fa-2xl"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ownership">
        <div class="container">
          <div class="row">
            <div
              class="col-12 d-flex justify-content-between align-items-center"
            >
              <div class="developer-name">aml walaed</div>
              <div class="developer-email">amlwalaed@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Search from "./components/home/search.vue";
export default {
  data() {
    return {
      showCart: false,
      showLogin: false,
      showUser: false,
    };
  },
  components: { Search },
  methods: {},
  computed: {
    ...mapGetters(["getCarts", "getUser"]),
  },
  beforeCreate() {
    this.$store.dispatch("fetchData");
    this.$store.commit("setUser");
    this.$store.dispatch("getUserCart");

  },
};
</script>


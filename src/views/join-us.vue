<template>
  <div class="join-us">
    <div class="container">
      <div class="content">
        <div class="form-content w-sm-100">
          <header>
            <div class="sing-up" @click="removeActive">sign up</div>
            <div class="sig-in active" @click="removeActive">sign in</div>
          </header>
          <form
            @submit.prevent="handleSubmit()"
            v-if="visible"
            class="form-sign-in"
            method="POST"
          >
          <div class="alert alert-danger" role="alert" v-if="error">{{error}}</div>
            <label>username</label>
            <input type="text" name="usename" v-model="username" />
            <label>password</label>
            <input type="password" name="password" v-model="password" />
            <a href="#">forget password ?</a>
            <button>sign in</button>
          </form>
          <form method="post" v-if="visible == false" class="form-sign-up">
            <div class="row">
              <div class="col-lg-6 col-sm-12 d-flex flex-column">
                <label>name</label>
                <input type="text" name="name" />
              </div>
              <div class="col-lg-6 col-sm-12 d-flex flex-column">
                <label>phone number</label>
                <input type="text" name="phone" />
              </div>
            </div>
            <label>email</label>
            <input type="email" />
            <div class="row">
              <div class="col-lg-6 col-sm-12 d-flex flex-column">
                <label>password</label>
                <input type="password" name="password" />
              </div>
              <div class="col-lg-6 col-sm-12 d-flex flex-column">
                <label>confirm password</label>
                <input type="password" name="confirm-password" />
              </div>
            </div>
            <div class="container-rules d-flex align-items-start">
              <input type="checkbox" id="confirm-rules" />
              <label for="confirm-rules">
                <a href="#">i accept all rules</a>
              </label>
            </div>
            <button type="submit">sign up</button>
          </form>
        </div>
        <div class="photo d-none d-lg-block text-center p-5 h-75">
          <img
            src="https://raw.githubusercontent.com/ElzeroWebSchool/HTML_And_CSS_Template_Four/main/imgs/welcome.png"
            class="m-auto w-100"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      visible: true,
      username: "",
      password: "",
      error: "",
    };
  },
  methods: {
    removeActive(event) {
      event.target.classList.add("active");
      if (event.target.nextElementSibling != null) {
        event.target.nextElementSibling.classList.remove("active");
        this.visible = false;
      } else {
        event.target.previousElementSibling.classList.remove("active");
        this.visible = true;
      }
    },
    async handleSubmit() {
      await axios
        .post(
          "auth/login",
          {
            username: this.username,
            password: this.password,
            expiresInMins: 60, 
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((response) => {
          if (response.status === 200) {
            this.$router.push({ name: "home" });
            axios.defaults.headers.common["authorization"] =
              "Bearer " + response.data.token;
              this.$store.commit('setUser' ,response.data )
              localStorage.setItem('token', JSON.stringify(response.data.token))
          }
        })
        .catch(() => {
          this.error = "the username or password is incorrect";
        });
    },
  },
};
</script>

<style scoped>
.join-us {
  background-color: var(--gray-color);
}
.join-us .content {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: row;
  height: 90vh;
  padding: 25px 0;
}
.join-us .form-content,
.join-us .photo {
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  width: 45%;
}
@media (max-width: 767px) {
  .join-us .form-content {
    width: 100%;
  }
}
.join-us .content .form-content header {
  display: flex;
  font-weight: bold;
}
.join-us .content .form-content header div {
  margin: auto;
  background-color: var(--gray-color2);
  width: 50%;
  padding: 10px;
  text-align: center;
  cursor: pointer;
}
.join-us .content .form-content header div.active {
  background-color: var(--sec-color);
  color: white;
}
.join-us .content .form-content header div:hover {
  opacity: 0.5;
}
.join-us .content .form-content form {
  display: flex;
  flex-direction: column;
  padding: 30px;
}
.join-us .content .form-content form input:not([type="button"]) {
  border: none;
  background-color: var(--gray-color2);
  margin: 10px 0;
  padding: 10px 5px;
  border-radius: 5px;
}

.join-us .content .form-content form input:not([type="button"]):focus {
  outline: 1px solid var(--sec-color);
}
.join-us .content .form-content form input[type="checkbox"] {
  margin-right: 5px;
}
.join-us .content .form-content form input[type="checkbox"]:focus {
  outline: none;
  border: none;
}
.join-us .content .form-content form button {
  width: 50%;
  border: none;
  background-color: var(--sec-color);
  color: white;
  font-weight: bold;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  margin: 10px auto;
}
</style>
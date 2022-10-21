<template>
  <div class="join-us">
    <div class="container">
      <div class="content">
        <div class="form-content w-sm-100">
          <header>
            <div class="sing-up" @click="removeActive">تسجيل جديد</div>
            <div class="sig-in active" @click="removeActive">تسجيل دخول</div>
          </header>
          <form method="post" v-if="visible" class="form-sign-in">
          <label>رقم لجوال / البريد الالكترونى</label>
          <input type="text" />
          <label>كلمة المرور</label>
          <input type="password" />
          <a href="#">هل نسيت كلمة المرور؟</a>
          <input type="button" value="دخول" />
        </form>
        <form method="post" v-if="visible==false" class="form-sign-up">
            <div class="row">
                <div class="col-lg-6 col-sm-12 d-flex flex-column">
                    <label>الاسم</label>
                    <input type="text" name="name"/>
                </div>
                <div class="col-lg-6 col-sm-12 d-flex flex-column">
                    <label>رقم الجوال</label>
                    <input type="text" name="phone"/>
                </div>
            </div>
          <label> البريد الالكترونى</label>
          <input type="email" />
          <div class="row">
                <div class="col-lg-6 col-sm-12 d-flex flex-column">
                    <label>كلمة المرور</label>
                    <input type="password" name="password"/>
                </div>
                <div class="col-lg-6 col-sm-12 d-flex flex-column">
                    <label> تاكيد كلمة المرور</label>
                    <input type="password" name="confirm-password"/>
                </div>
            </div>
          <div class="container-rules d-flex align-items-start">
              <input type="checkbox" id="confirm-rules">
              <label for="confirm-rules">
                انا اوافق على <a href="#">الشروط و الاحكام</a>
              </label>
          </div>
          <input type="button" value="تسجيل"/>
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
export default{
    data(){
        return{
            visible:true
        }
    },
    methods:{
        removeActive(event){
            event.target.classList.add('active')
            if(event.target.nextElementSibling!=null){
                event.target.nextElementSibling.classList.remove('active')
                this.visible=false
            }else{
                event.target.previousElementSibling.classList.remove('active')
                this.visible=true
            }
        }
    }
}
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
@media (max-width:767px){
    .join-us .form-content{
        width: 100%;
    }
}
.join-us .content .form-content header {
  display: flex;
  font-weight: bold;
}
.join-us .content .form-content header div{
    margin: auto;
    background-color: var(--gray-color2);
    width: 50%;
    padding: 10px;
    text-align: center;
    cursor: pointer;
}
.join-us .content .form-content header div.active{
    background-color: var(--sec-color);
    color: white;
}
.join-us .content .form-content header div:hover{
    opacity: 0.5;
}
.join-us .content .form-content form{
    display: flex;
    flex-direction: column;
    padding: 30px;
}
.join-us .content .form-content form input:not([type='button']){
    border: none;
    background-color: var(--gray-color2);
    margin: 10px 0;
    padding: 10px 5px;
    border-radius: 5px ;
}

.join-us .content .form-content form input:not([type='button']):focus{
    outline: 1px solid var(--sec-color);
}
.join-us .content .form-content form input[type='checkbox']{
    margin-right: 5px;
}
.join-us .content .form-content form input[type='checkbox']:focus{
    outline: none;
    border: none;
}
.join-us .content .form-content form input[type='button']{
    width: 50%;
    border: none;
    background-color: var(--sec-color);
    color: white;
    font-weight: bold;
    text-align: center;
    padding: 10px;
    border-radius: 5px;
    margin:10px auto;
}
</style>
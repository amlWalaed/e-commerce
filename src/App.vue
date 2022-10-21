<template>
  <div id="app" lang="ar">
    <nav>
     <div class="container">
      <div class="nav-content">
        <div class="logo">
          <img src="./assets/logo.png" alt="">
        </div>
        <div class="search-box col-lg-4 col-sm-2 d-none d-lg-block">
        <input type="text" placeholder="ابحث عن ما تريد...">
        <span><i class="fas fa-search"></i></span>
      </div>
      <ul class="links">
        <li><a href="#">
            <i class="fa-regular fa-heart fa-2xl"></i>
          <span>1</span>
        </a></li>
        <li><a href="#">
            <i class="fa-regular fa-bell fa-2xl"></i>
          <span>1</span>
        </a></li>
        <li><a href="#">
          <i class="fa-regular fa-user fa-2xl"></i>
          <div>اهلا بك<br/> <span>حسابى</span></div>
        </a></li>
        <li><a href="#">
          <i class="fas fa-shopping-cart fa-2xl"></i>
          <div>عربة التسوق<br/> <span>ر.س 900</span></div>
        </a></li>
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
              <router-link to="/">الرئيسة</router-link> 
              <router-link to="/about">معلومات عنا</router-link> 
              <router-link to="/join-us">انضم الينا</router-link> 
            </div>
          </div>
        </div>
      </div>
    </main>
    <!-- end main  -->
    <router-view/>
  <footer>
    <div class="container">
      <div class="row">
        <div class="footer-content col-12 my-5 d-lg-flex  justify-content-between justify-content-sm-center">
          <div class="col-lg-2 col-md-6 col-sm-12">
            <div class="header">فخر</div>
            <ul class="d-inline-flex flex-column">
              <li>الرئسية</li>
              <li>الاقسام</li>
              <li>فخر</li>
              <li>انضم الينا</li>
            </ul>
          </div>
          <div class="col-lg-2 col-md-6 col-sm-12 ">
            <div class="header">حسابى</div>
            <ul class="d-inline-flex flex-column">
              <li>الملف الشخصى</li>
              <li>قائمة الامنيات</li>
              <li>طلباتى</li>
              <li>الفواتير</li>
              <li>تسجيل دخول / جديد</li>
            </ul>
          </div>
          <div class="col-lg-2 col-md-6 col-sm-12 ">
            <div class="header">من نحن</div>
            <ul class="d-inline-flex flex-column">
              <li>عن المنصة</li>
              <li>اتصل بنا</li>
              <li>قيمنا</li>
            </ul>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="header">اشترك معنا</div>
            <p>ادخل عنوا بريدك الالكترونى ادناه لاشتراك فى النشرة الاخبارية لدينا و مواكبة الخصومات و العروض الخاصة</p>
            <div class="col-auto">
              <div class="input-group mb-2">
              <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="ادخل البريد الالكترونى">
              <div class="input-group-prepend">
              <div class="input-group-text" style="color:white; background-color: var(--sec-color); margin-right: 5px;">تابعنا</div>
              </div>
            </div>
            <div class="header">تبعنا على منصات التواصل الاجتماعى</div>
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
        <div class="col-12  d-flex justify-content-between align-items-center">
              <div class="developer-name">
                تم التصميم بواسطة aml walaed
              </div>
              <div class="developer-email">
                amlwalaed@gmail.com
              </div>
            </div>
          </div>
        </div>
    </div>
  </footer>
  </div>
</template>

<style>
</style>

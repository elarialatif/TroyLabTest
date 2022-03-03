<template>
  <div class="side-navbar col-lg-2 col-md-2">
    <div class="title row">
        <h6>الطلبات الحالية</h6>
    </div>
    <div class="content">
      <div class="row item1">
        <div class="col-lg-8">
            <h3>ملخص الطلبات الواردة</h3>
        </div>
        <div class="col-lg-4">
          <router-link to="/" style="color: #fff;">
            <span style="font-size: 12px;">حفظ</span>
          </router-link>
        </div>
      </div>
      <div class="row card-item">
        <div class="col-md-2">
          <img src="../assets/images/p5.png" alt="">
        </div>
        <div class="col-md-8">
          <span>عصير برتقال 250مل</span> <br/>
        </div>
        <div class="col-md-2 dv-num">
          <span class="num">5</span>
          <box-icon type='solid' name='circle' size="xs" color="#ffaa00"></box-icon>
        </div>
      </div>
      <div class="row card-item">
        <div class="col-md-2">
          <img src="../assets/images/pz.png" alt="">
        </div>
        <div class="col-md-8">
          <span>شيبسي شطة و ليمون 150جرام</span> <br/>
        </div>
        <div class="col-md-2 dv-num">
          <span class="num">9</span>
        </div>
      </div>
      <div class="row card-item">
        <div class="col-md-2">
          <img src="../assets/images/p7.png" alt="">
        </div>
        <div class="col-md-8">
          <span>اوريو علبة 5 قطع</span>
        </div>
        <div class="col-md-2 dv-num">
          <span class="num">8</span>
        </div>
      </div>
      <div class="row card-item">
        <div class="col-md-2">
          <img src="../assets/images/p8.png" alt="">
        </div>
        <div class="col-md-8">
          <span>هايدرا عصير مركز</span>
        </div>
        <div class="col-md-2 dv-num">
          <span class="num">5</span>
        </div>
      </div>
      <div class="content-footer">
        <div class="row orders">
          <div class="col-md-9">
            <h4>عدد الطلبات</h4>
          </div>
          <div class="col-md-3">
            <h5>30</h5>
          </div>
        </div>
        <div class="row total">
          <div class="col-md-9">
            <h4>المجموع</h4>
          </div>
          <div class="col-md-3">
            <h5>
              <span>22.50</span>
              <span class="currency">ريال</span>
            </h5>
          </div>
        </div>
        <div class="row actions">
          <button class="btn col-md-5 accept">قبول الطلبات</button>
          <button class="btn col-md-5 refund">رفض الطلبات</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'EditSideBar',
    components: {},
    mounted() {

    }

  };
</script>


<style scoped>
  .side-navbar {
    min-height: 100vh;
    background-color:#e8f8f7;
    transition: 0.5s;
    direction: rtl;
  }

  .nav-link:active,
  .nav-link:focus,
  .nav-link:hover {
    background-color: #ffffff26;
  }
  #menu-btn {
    background-color: #100901;
    color: #fff;
    margin-left: -62px;
  }

  .my-container input {
    border-radius: 2rem;
    padding: 2px 20px;
  }

  .action-btn {
    padding: 2.5rem 1.5rem;
  }

  .action-btn button {
    padding: 0;
    border-radius: 10px;
    text-align: center;
    margin-left: 0.2rem;
  }

  .action-btn button:first-of-type {
    margin: 0 0.2rem;
  }

  .input-search {
    position: relative;
    padding: 0;
  }

  .input-search input {
    position: relative;
    text-align: right;
    margin: 0 1rem;
    border-radius: 10px;
  }

  .input-search img {
    position: absolute;
    z-index: 9;
    top: 26%;
    left: 16%;
    width: 20px;
    height: 20px;
  }

  .action-btn button img {
    width: 60%;
  }

  .content {
    margin-top: 10%;
    margin-left: 10%;
    text-align: center;
  }

  h5 {
    color: #9fdcd7;
    margin-top: 1rem;
  }
  .title {
    background-color:#13a69a;
    color: #fff;
    height: 90px;
    position: relative;
  }
  .title h6 {
    background-color: #fff;
    color: #242424;
    width: max-content;
    height: max-content;
    padding: 1rem 3rem;
    border-radius: 10px;
    position: absolute;
    top: 20%;
    left: 10%;
  }
  .row.item1 div:last-of-type {
    background-color:#13a69a;
    color: #fff;
    border-radius: 10px;
    position: relative;
    cursor: pointer;
  }
  .row.item1 div:last-of-type box-icon{
    position: absolute;
    right: 17%;
  }
  .row.item1 div:last-of-type span{
    position: absolute;
    right: 40%;
  }
  .row.item1 h3 {
    color: rgb(36, 36, 36);
    font-size: 12px;
    position: relative;
    top: 15%;
  }
 
  .card-item {
    background-color: #fff;
    border-radius: 10px;
    padding: 0.5rem 0;
    margin-top: 1rem;
    margin-right: 0.2rem;
  }
  .card-item span {
    color:#363636;
    font-size: 12px;
  }
  .card-item span.edited {
    color:#ffaa00;
  }
  .dv-num {
    border: 1px solid #a2a2a2;
    border-radius: 10px;
    height: 30px;
    padding: 0.5rem 1rem;
    position: relative;
  }
  .card-item span.num {
    color:#13a69a;
    font-weight: bold;
    position: absolute;
    top: 20%;
    left: 40%;
  }
  .card-item .dv-num box-icon {
    position: absolute;
    left: 80%;
    bottom: 80%;

  }
  .card-item .col-md-8 {
    padding: 0 0.3rem;
    text-align: right;
  }
  .content-footer {
    margin-top: 5rem;
  }
  .content-footer h4 {
    font-size: 14px;
    text-align: right;
    margin: 0;
    padding-top: 1.2rem;
  }
  .content-footer h5 {
    font-size: 12px;
    text-align: center;
    font-weight: bold;
    color: #000;
    position: relative;
    top: 20%;
  }
  .content-footer h5 span.currency {
    color: #0fa59a;
  }
  .content-footer .orders {
    border-bottom: 1px solid #b2c8c7;
    padding-bottom: 0.5rem;
  }
  .actions  {
    padding-top: 2rem;
  }
  .actions .btn {
    border-radius: 10px;
    color: #fff;
    font-size: 12px;
    margin: auto;
    padding: 0.7rem 0.2rem;
  }
  .actions .accept {
    background-color:#208178;
  }
  .actions .refund {
    background-color:#ec2424;
  }
</style>
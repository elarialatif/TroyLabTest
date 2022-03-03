<template>
    <div class="side-navbar col-lg-2 col-md-2">
        <div class="action-btn row">
            <button type="button" class="btn btn-primary col-md-2">
                <img src="../assets/images/user-ask.png" alt="">
            </button>
            <button type="button" class="btn btn-warning  col-md-2">
                <img src="../assets/images/search-final.png" alt="">
            </button>
            <div class="input-search  col-md-7">
                <img src="../assets/images/search2.png" alt="">
                <input type="text" class="form-control" placeholder="اسم الطالب" aria-label="Username"
                    aria-describedby="addon-wrapping">
            </div>
        </div>
        <div class="content">
            <div class="user row">
                <div class="col-md-2">
                    <img src="../assets/images/user.png" alt="">
                </div>
                <div class="col-md-8">
                    <div class="col-md-12">
                        <span style="color:#aeece7">الرقم المقصفي</span>
                        <span class="num">123</span>
                    </div>
                    <div class="col-md-12" style="margin-top: 1rem; margin-right: 0.5rem;">
                        محمد بن بندر الوشيقيرى
                    </div>
                </div>
                <div class="col-md-2">
                    <box-icon type='solid' name='x-circle' color="#fff"></box-icon>
                </div>
            </div>
            <div class="product row">
                <h4> 3 منتجات </h4>
                <div class="col-md-2">
                    <img src="../assets/images/p8.png" alt="">
                </div>
                <div class="col-md-8">
                    <span style="color:#363636">شيبسي لايز 150جم</span><br />
                    <span style="color: #0fa59a;">7.5 ريال 2x</span>
                </div>
                <div class="col-md-2">
                    <box-icon type='solid' name='x-circle' color="#ff8d8d"></box-icon>
                    <span style="color:#000">15:00</span>
                    <span style="color:#363636">ريال</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ResultSideBar',
        components: {},
        mounted() {

        }

    };
</script>


<style scoped>
    .side-navbar {
        min-height: 100vh;
        background-color: #13a69a;
        transition: 0.5s;
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
        margin-top: 2%;
        text-align: center;
        direction: rtl;
    }

    .user {
        background-color: #1d6f68;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        margin: 0 0.2rem;
        padding: 1rem 0.2rem;
        font-size: 12px;
        font-weight: bold;
        color: #fff;
    }

    .user .num {
        position: relative;
        top: 1rem;
    }

    .user box-icon {
        position: relative;
        bottom: 15%;
    }

    h5 {
        color: #9fdcd7;
        margin-top: 1rem;
    }

    .product {
        background-color: #e8f8f7;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
        margin: 0 0.2rem;
        padding: 1rem 0.2rem;
    }
</style>
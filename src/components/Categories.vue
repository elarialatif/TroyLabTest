<template>
    <div class="categories-component">
        <div class="row">
            <div class="col-lg-2 col-md-2">
                <a class="item first">
                    <span>الكل</span>
                </a>
            </div>
            <div class="col-lg-2 col-md-2">
                <a class="item">
                    <img src="../assets/images/pizza.png" alt="">
                    <span>بيتزا</span>
                </a>
            </div>
            <div class="col-lg-2 col-md-2">
                <a class="item">
                    <img src="../assets/images/burger.png" alt="">
                    <span>سندوتشات</span>
                </a>
            </div>
            <div class="col-lg-2 col-md-2">
                <a class="item">
                    <img src="../assets/images/drink.png" alt="">
                    <span>مشروبات</span>
                </a>
            </div>
            <div class="col-lg-2 col-md-2">
                <a class="item">
                    <img src="../assets/images/burger.png" alt="">
                    <span>سندوتشات</span>
                </a>
            </div>
            <div class="col-lg-2 col-md-2">
                <a class="item">
                    <img src="../assets/images/drink.png" alt="">
                    <span>مشروبات</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CategoriesComponent',
        components: {},
        mounted() {

        }

    };
</script>


<style scoped>
    .categories-component{
        direction: rtl;
        text-align: right;
        margin-top: 1rem;
        padding-top: 2rem;
    }
    .item{
        width: max-content;
        margin: auto;
        background-color: #fff;
        border-radius: 10px;
        padding: 0.5rem 1rem;
        color: #0fa59a;
        cursor: pointer;
        text-decoration: none;
    }
    .categories-component .item.first {
        background-color:#0fa59a;
        color: #fff;
        height: 42px;
        position: relative;
        right: 10%;
        top: 10%;
    }
</style>
<template>
    <div id="floating-footer">
        <div class="container">
            <div class="row">
                <router-link to="/orders" class="item cart col-lg-3 col-md-6">
                    <box-icon color="#818181" name='cart'></box-icon>
                    <h6>طلبات مسبقة</h6>
                </router-link>
                <router-link to="/orders" class="item orders col-lg-3 col-md-6">
                    <box-icon color="#818181" name='file'></box-icon>
                    <h6>المبيعات</h6>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FooterComponent',
        components: {},
        mounted() {

        }

    };
</script>


<style scoped>
    #floating-footer {
        height: 100px;
        width: 100%;
        background-color: #fff;
        position: fixed;
        bottom: 0;
    }

    .row {
        margin: 1% 10%;
    }
    .item {
        position: relative;
    }
    box-icon {
        display: block;
        position: absolute;
        left: 15%;
        color:#818181
    }
    box-icon:last-of-type {
        left: 13%;
    }
    h6 {
        margin-top: 2rem;
        color:#818181
    }
    a {
        text-decoration: none;
    }
</style>
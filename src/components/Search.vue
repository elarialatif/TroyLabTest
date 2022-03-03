<template>
    <div class="search-component">
        <div class="row">
            <div class="col-md-11 search-input">
                <img src="../assets/images/search.png" alt="">
                <input type="text" placeholder="بحث">
                <box-icon class="search-icon" name='search' color="#a2a2a2"></box-icon>
            </div>
            <div class="col-md-1">
                <box-icon name='filter-alt' color="#13a69a"></box-icon>
            </div>
        </div>
        <div class="row results">
            <div class="item">
                <span>سندوتشات</span>
                <box-icon type='solid' name='x-circle' color="#b4b4b4"></box-icon>
            </div>
            <div class="item">
                <span>سندوتشات</span>
                <box-icon type='solid' name='x-circle' color="#b4b4b4"></box-icon>
            </div>
            <div class="item">
                <span>سندوتشات</span>
                <box-icon type='solid' name='x-circle' color="#b4b4b4"></box-icon>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SearchComponent',
        components: {},
        mounted() {

        }

    };
</script>


<style scoped>
    .search-component {
        direction: rtl;
        text-align: right;
        margin-top: 1rem;
        padding-top: 2rem;
    }

    .search-input {
        position: relative;
    }

    .search-input img {
        position: absolute;
        right: 5%;
        top: 23%;
    }

    .search-input .search-icon {
        position: absolute;
        left: 29%;
        top: 23%;
    }

    input {
        width: 70%;
        margin-right: 2rem;
        padding: 0.5rem 1rem;
        border-radius: 10px;
        border: 1px solid #a2a2a2;
        padding-right: 4rem;
    }

    .results {
        margin: 1rem 0;
        margin-right: 2%;
    }
    .results .item {
        background-color: #fff;
        border-radius: 10px;
        width: 8%;
        margin-left: 1rem;
        padding: 0;
        padding-right: 0.5rem;
        
    }
    .results .item span {
        color: #b4b4b4;
        font-size: 12px;
        position: relative;
        bottom: 15%;
    }
    .results .item box-icon {
        position: relative;
        top: 13%;
        right: 15%;
    }
</style>
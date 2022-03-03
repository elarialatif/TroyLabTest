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
      <img src="../assets/images/find.png" alt="">
      <h5>يجب عليك اختيار طالب اولا</h5>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SideBar',
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
    margin-top: 75%;
    text-align: center;
  }

  h5 {
    color: #9fdcd7;
    margin-top: 1rem;
  }
</style>
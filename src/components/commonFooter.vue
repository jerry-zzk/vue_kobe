<template lang="html">
  <div class="footer">
    <ul class="footer-cont">
        <router-link to="/"> 
          <li class="btn btn-success">我的</li>
        </router-link>
        <router-link to="/">
          <li class="btn btn-primary">列表</li>
        </router-link>
        <router-link to="/detail">
          <li class="btn btn-danger">商品</li>
        </router-link>
        <router-link to="/msg">
          <li class="btn btn-primary">订单</li>
        </router-link>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
  .footer {
    height: 1.8rem;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: 2px solid #ccc;
    background-color: #fff;
  }
  .footer-cont li {
    float: left;
    width: 25%;
    height: 1.8rem;
    line-height: 1.8rem;
    font-size: 1rem;
    text-align: center;
    border-right:1px solid #aaa;
  }
  .footer-cont li:active {
    background-color: #ccc;
  }
  .footer-cont:after {
    content: '';
    display: block;
    clear: both;
    width: 0;
    height: 0;
  }
</style>

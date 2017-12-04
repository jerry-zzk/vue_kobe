<template lang="html">
  <div class="detail">
      <detail-header></detail-header>
      <img src="../assets/image/kobe.jpg" alt="" />
      <p class="site-title">* Kobe and Jordan *</p>
      <router-link to="/msg">
        <p class="site-cont">XXXXXXXXXXXXXXXXXXX</p>
        <button style="font-size:1rem;" @click ="success" class="suc btn btn-success">点击跳转</button>

      </router-link>


      <div class="show">
        <router-view></router-view>
      </div>

      <common-footer></common-footer>
  </div>
</template>

<script>
  import DetailHeader from '../components/DetailHeader'
  import CommonFooter from '../components/commonFooter'

  export default {
    data () {
        return {
        }
    },
    components:{
      DetailHeader,
      CommonFooter
    },
    methods:{
      success:function(){
         alert('成功，跳转下一页');
         
      }
    }
  }
</script>

<style lang="css">
  .suc{
      width:5rem;
      margin-left:5rem;
      margin-top:2rem;
      height:2rem;
  }
  .detail {
    padding: 0.25rem;
    font-size: 12px;
  }
  .detail > img {
    display: block;
    width: 80%;
    margin:  0 auto 0.5rem;
  }
  .detail > p {
    font-size: 1.1rem;
    line-height: 1.5rem;
    text-align: left;
    padding-bottom: 0.5rem;
  }
  .detail > p.site-title {
    text-align:center;
    color: #ff8000;
  }
  p.site-cont {
    text-align:center;
    color: #666;
    font-size: 0.9rem;
  }
  div.show{
    color: #f00;
    font-size: 0.9rem;
  }
</style>

<template lang="html">
  <div class="head">
    <div class="header">
      <a href="javascript:;" class="go-back" @click="goBack">返回</a>
      <h4 class="header-cont">订单管理</h4>
      <img src="../assets/image/kobe.jpg" alt="" />
      <table class="ta table table-bordered table-hover">
        <thead>
          <td>价格</td>
          <td>数量</td>
          <td>信息</td>
        </thead>
        <tbody>
          <tr>
            <td>{{title}}</td>
            <td>{{msg}}</td>
            <td>{{xinxi}}</td>
          </tr>
          <tr>
            <td>{{title}}</td>
            <td>{{msg}}</td>
            <td>{{xinxi}}</td>
          </tr>
          <tr>
            <td>{{title}}</td>
            <td>{{msg}}</td>
            <td>{{xinxi}}</td>
          </tr>
        </tbody>
      </table>
      <router-link to="/">
        <button class="btn btn-success">查询快递信息</button>
      </router-link>
    </div>
  </div>
</template>

<script>
  import DetailHeader from '../components/DetailHeader'
  import CommonFooter from '../components/commonFooter'
  export default {
    data(){  
          return{
              title:'xx.00元',
              msg:'xxxxxxxx',
              xinxi:'这是您的订单号码....',
          }  
       },  
    methods: {
      goBack () {
        window.history.back();
      }
    }
  }
</script>

<style lang="css" scoped>
  .header button {
    height:2rem;
    line-height:1.8rem;
    width:8rem;
    font-size:1rem;
    margin-left:3.5rem;
    margin-top:2rem;
    border-radius:0.3rem;
  }
  .header > img {
    display: block;
    width: 80%;
    margin: 0.5rem auto 0.5rem;
  }
  .header > p {
    font-size: 1rem;
    line-height: 1.5rem;
    text-align: left;
    margin-left:1.5rem;
  }
  .head{
    height: 2rem;
  }
  .header{
    width: 100%;
    height: 2rem;
    position: fixed;
    left: 0;
    top: 0;
    background-color: #fff;
    border-bottom: 2px solid #ccc;
  }
  .header .go-back {
    width: 2rem;
    height: 2rem;
    text-align: center;
    color: #aaa;
    font-size: 0.8rem;
    float: left;
    line-height: 2rem;
    margin-left: 1rem;
    position: absolute;
    left: 0;
    top: 0;
  }
  .header .header-cont {
    width: 100%;
    text-align: center;
    line-height: 2rem;
    font-size: 1.2rem;
  }
  .ta{
    width: 80%;
    text-align: center;
    font-size:0.6rem;
    margin-left:1.5rem;
    margin-top:2rem;
  }
  .ta>thead{
    font-size:0.8rem;
  }
</style>
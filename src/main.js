

import Vue from 'vue'

import VueResource from 'vue-resource'
Vue.use(VueResource)

import router from './router/index'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import $ from 'jquery'

import 'bootstrap/css/bootstrap.min.css' 
import 'bootstrap/js/bootstrap.min'
new Vue({
  el: '#app',
  data () {
    return {
    }
  },
  router
})

const FastClick = require('fastclick')
FastClick.attach(document.body)


Vue.filter('dCurrency', function(value) {
  return '￥'+value
})
Vue.filter('dTofixed', function(value) {
  var isNum = parseFloat(value);
  console.log(isNum);
  if( !isNum ){
      alert("请输入数字")
      return "请输入数字";
  } else {
      var value = Math.round(isNum*100)/100;
      var item = value.toString().split(".");
      // console.log(item);
      if(item.length == 1){
          value = value.toString()+".00";
          return value;
      }
      if(item.length > 1){
          if(item[1].length < 2){
              value = value.toString()+"0";
          }
          return value;
      }
  }
})

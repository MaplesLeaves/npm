/*
 * @Author: your name
 * @Date: 2020-07-31 13:25:23
 * @LastEditTime: 2020-07-31 13:57:53
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \taibaoc:\Users\Lenovo\Desktop\test\steven\src\main.js
 */ 
import Vue from 'vue'
import App from './App.vue'
import map from './views';
Vue.config.productionTip = false
Vue.use(map)
new Vue({
  render: h => h(App),
}).$mount('#app')

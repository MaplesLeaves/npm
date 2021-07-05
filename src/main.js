/*
 * @Author: your name
 * @Date: 2020-07-31 13:25:23
 * @LastEditTime: 2021-06-04 12:07:43
 * @LastEditors:  
 * @Description: In User Settings Edit
 * @FilePath: \taibaoc:\Users\Lenovo\Desktop\test\steven\src\main.js
 */ 
import Vue from 'vue'
import App from './App.vue'
import map from './views';
// import Button from 'ant-design-vue/lib/button';
import 'ant-design-vue/dist/antd.css'
Vue.config.productionTip = false
// Vue.component(Button.name, Button);
Vue.use(map)
new Vue({
  render: h => h(App),
}).$mount('#app')

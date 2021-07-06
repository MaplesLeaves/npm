/*
 * @Author: your name
 * @Date: 2020-07-31 13:25:23
 * @LastEditTime: 2021-07-06 14:47:27
 * @LastEditors:  
 * @Description: In User Settings Edit
 * @FilePath: \taibaoc:\Users\Lenovo\Desktop\test\steven\src\main.js
 */ 
import Vue from 'vue'
import App from './App.vue'
import map from './views';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI);
// Vue.component(Button.name, Button);
Vue.use(map)
new Vue({
  render: h => h(App),
}).$mount('#app')

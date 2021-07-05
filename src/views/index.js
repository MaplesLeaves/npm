/*
 * @Author: your name
 * @Date: 2020-07-31 13:35:32
 * @LastEditTime: 2021-06-04 12:10:30
 * @LastEditors:  
 * @Description: In User Settings Edit
 * @FilePath: \taibaoc:\Users\Lenovo\Desktop\test\steven\src\views\index.js
 */ 
import Vue from 'vue'
// import Button from './button/Button.vue'
import Button from 'ant-design-vue/lib/button';
import {Divider} from 'ant-design-vue'
import './../button.less'

const list = [
    Button,
    Divider
]
const install = (Vue)=>{
    list.forEach((component)=>{
        Vue.component(component.name, component )
    })
}
if (typeof window !== undefined && window.Vue) {
    install(window.Vue)
}
export default {
    install,
    Button
}
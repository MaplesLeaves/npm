/*
 * @Author: your name
 * @Date: 2020-07-31 13:35:32
 * @LastEditTime: 2020-07-31 14:04:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \taibaoc:\Users\Lenovo\Desktop\test\steven\src\views\index.js
 */ 
import Vue from 'vue'
import Button from './button/Button.vue'
const Components = [
    Button
]
const install = (Vue)=>{
    console.error(Components);
    Components.forEach((component)=>{
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
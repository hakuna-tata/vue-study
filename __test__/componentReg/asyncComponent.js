Vue.component('HelloWorld',
    // 普通函数异步组件
    /* function(resolve,reject){
        require(['./xxx.vue'], resolve)
    } */

    // Promise异步组件
    /* () => import('./xxx.vue') */

    // 高级异步组件
    
)

new Vue({
    el:"#app",
    template:`<hello-world></hello-world>`
})
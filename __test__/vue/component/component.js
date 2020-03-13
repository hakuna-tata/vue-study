var HelloWorld = {
    name:"HelloWorld",
    template:`
        <h1>
            hello world
        </h1>
    `
}

var App = {
    // 局部注册
    components:{ HelloWorld },
    template:`
        <div>
            {{ msg }}
            <hello-world></hello-world>
        </div>
    `,
    data(){
        return{
            msg:"hello app"
        } 
    }
}

// 全局注册
Vue.component('App', App)

new Vue({
    el:"#app",
    template: `<App />`
})

/**
 * 三种异步组件注册
 * 
  1.Vue.component('TestAsync', (resolve,reject) => {
        require(['./TestAsync.vue'], function(res){
            resolve(res)
        })
    })

  2.Vue.component('TestAsync', () => import('./TestAsync.vue'))

  3.Vue.component('TestAsync', () => (
            component: import('./TestAsync.vue'),
            // 加载时渲染的组件
            loading: LoadingComp,
            // 出错时渲染的组件
            error: ErrorComp,
            // 渲染加载中组件前等待时间
            delay: 200,
            //最长等待时间，超过此时间则默认渲染错误
            timeout: 100
        )
    })
*/
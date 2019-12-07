Vue.component('child-comp',{
    name:'childComp',
    template:`<div>{{ this.msg }}</div>`,
    data(){
        return{
            msg:'hello vue'
        }
    }
})


new Vue({
    el:"#app",
    template:`<child-comp></child-comp>`
})
Vue.mixin({
    created() {
        console.log("mixin created")
    },
})

var childComp = {
    template:`<div>{{ this.msg }}</div>`,
    data(){
        return{
            msg: "hello,vue"
        }
    },
    created() {
        console.log("child created")
    },
    mounted() {
        console.log("child mounted")
    },
}

new Vue({
    el:"#app",
    render(h) {
        return h(childComp)
    },
})
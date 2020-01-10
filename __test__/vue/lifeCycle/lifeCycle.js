var childComp = {
    template:`<div>{{ this.msg }}</div>`,
    data(){
        return{
            msg: "hello,vue"
        }
    },
    beforeCreate(){
        console.log('child create')
    },
    created() {
        console.log("child created")
    },
    beforeMount(){
        console.log("child beforeMount")
    },
    mounted() {
        console.log("child mounted")
    },
}

new Vue({
    el:"#app",
    beforeCreate(){
        console.log('parent create')
    },
    created() {
        console.log("parent created")
    },
    beforeMount(){
        console.log("parent beforeMount")
    },
    mounted() {
        console.log("parent mounted")
    },
    render(h) {
        return h(childComp)
    },
})
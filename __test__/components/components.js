var HelloWorld = {
    name:"HelloWorld",
    template:`
        <h1>
            hello world
        </h1>
    `
}
var App = {
    components:{ HelloWorld },
    template:`
        <div>
            {{ this.msg }}
            <hello-world></hello-world>
        </div>
    `,
    data(){
        return{
            msg:"hello app"
        } 
    }
}
new Vue({
    el:"#app",
    render: h => h(App)
})
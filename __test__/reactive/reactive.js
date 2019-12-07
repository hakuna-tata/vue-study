var App = {
    template:`
        <div>
            <div v-if="flag">
                {{ list }}
            </div>
            <div v-else>
                {{ msg1 }}
            </div>
            <button @click="change">change</button>
            <button @click="toggle">toggle</button>
        </div>
    `,
    data(){
        return{
            flag:true,
            list:[1,2,3],
            msg:'hello vue',
            msg1:'hello app',
            nested:{
                name:'nested data'
            }
        }
    },
    methods:{
        change(){
            this.list[0] = 22
            this.list.__ob__.dep.notify()
            // this.msg = Math.random()
        },
        toggle(){
            this.flag = !this.flag
        }
    },
}

new Vue({
    el:"#app",
    render(h){
        return h(App)
    }
})
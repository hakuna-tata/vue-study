var App = {
    name:'App',
    template:`
        <div>
            <div>{{ name }}</div>
            <button @click="change">change</button>
            <button @click="changeLast">change last name</button>
        </div>
    `,
    data(){
        return{
            firstName:'Feng',
            lastName:'Xue',
            useLess:0
        }
    },
    computed:{
        name(){
            if(this.useLess > 0){
                return this.firstName + ',' + this.lastName
            }
            return 'plz click change'
        }
    },
    methods:{
        change(){
            this.useLess ++
        },
        changeLast(){
            this.lastName = "Da Xue"
        }
    }
}

new Vue({
    el:"#app",
    render(h){
        return h(App)
    }
})
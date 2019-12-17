var App = {
    name:'App',
    template:`
        <div>
            <div>{{ name }}</div>
            <button @click="change">{{ test }}</button>
            <button @click="changeLast">change last name</button>
        </div>
    `,
    data(){
        return{
            firstName:'Feng',
            lastName:'Xue',
            useLess:0,
            test:"change",
            nested:{
                a:{
                    b:1
                }
            }
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
    // watch:{
    //     useLess(newVal){
    //         console.loh('useless:'newVal)
    //     },
    //     name:{
    //         immediate:true,
    //         handler(newVal){
    //             console.log('name:'newVal)
    //         }
    //     },
    //     nested:{
    //         deep:true,
    //         // sync:true,
    //         handler(newVal){
    //             console.log('nested:'newVal.a.b)
    //         }
    //     }
    // },
    methods:{
        change(){
            this.useLess ++
            // thid.nested.a.b = 2
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
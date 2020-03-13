new Vue({
    el:"#app",
    render(createElement){
        return createElement('div',{
            attrs:{
                id:'app'
            }
        }, this.msg)
    },
    data(){
        return{
            msg:"hi!"
        }
    }
})
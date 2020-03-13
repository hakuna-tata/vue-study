Vue.use(Vuex)
const moduleA = {
    namespaced: true,
    state: {
        count: 1
    },
    mutations: {
        increment(state){
            state.count ++ 
        }
    },
    actions: {
        increment(context){
            context.commit('increment')
        }
    },
    getters:{
        computedCount(state) {
            return state.count + 1
        }
    }
}

const moduleB = {
    namespaced: true,
    state: {
        count: 1
    },
    mutations: {
        increment(state){
            state.count ++ 
        }
    },
    actions: {
        increment(context){
            context.commit('increment')
        }
    },
    getters:{
        computedCount(state) {
            return state.count + 1
        }
    }
}
const store = new Vuex.Store({
    modules:{
        a:moduleA,
        b:moduleB
    },
    state:{
        count:1
    },
    mutations: {
        increment(state){
            state.count ++ 
        }
    },
    actions: {
        increment(context){
            context.commit('increment')
        }
    },
    getters:{
        computedCount(state) {
            return state.count + 1
        }
    }
})
const app = new Vue({
    el: '#app',
    store,
})
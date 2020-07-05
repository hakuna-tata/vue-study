Vue.use(Vuex)

const moduleA = {
  namespaced: true,
  state:{
    count: 1
  },
  mutataions:{
    increment(state){
      state.count++
    }
  },
  actions:{
    increment(context){
      context.commit("increment")
    }
  },
  getters:{
    computedCount(state){
      return state.count + 1
    }
  }
}

const moduleB = {
  namespaced: true,
  state:{
    count: 1
  },
  mutataions:{
    increment(state){
      state.count++
    }
  },
  actions:{
    increment(context){
      context.commit("increment")
    }
  },
  getters:{
    computedCount(state){
      return state.count + 1
    }
  }
}
debugger;
const store = new Vuex.Store({
  strict: true,
  modules:{
    a:moduleA,
    b:moduleB
  },
  state:{
    count: 1
  }
})

new Vue({
  el:"#app",
  store
})
var HelloWorld = {
  name:"HelloWorld",
  props: ['flag'],
  template:`
      <div v-if="flag">
        <div>hello world</div>
      </div>
      <ul v-else>hello diff</ul>
  `
};

var App = {
  name:"App",
  components:{ HelloWorld },
  template:`
      <div>
          <hello-world :flag="flag"></hello-world>
          <button @click="toggle">toggle</button>
      </div>
  `,
  data(){
      return{
        flag: true
      } 
  },
  methods: {
    toggle(){
      this.flag = !this.flag
    }
  },
};

new Vue({
  el:"#app",
  render(h) {
  return h(App) 
  }
})